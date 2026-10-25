import { NextRequest, NextResponse } from "next/server";

/**
 * Website enquiries → Clyrix. The browser posts here; this server adds the secret key and the visitor's IP (for
 * Clyrix's spam limits) and forwards to Clyrix's lead intake, which saves the lead and copies it to Bitrix.
 * The key never reaches the browser.
 *
 * Env (Vercel → Settings → Environment Variables):
 *   CLYRIX_LEADS_URL  e.g. https://rscg.nxtnet.in/api/public/leads
 *   CLYRIX_LEADS_KEY  the intake key from Clyrix → Leads → ⋮ → Lead sources & Bitrix
 */

export const dynamic = "force-dynamic";

const FORMS = new Set(["consultation", "callback", "quote-list", "contact"]);
const MAX_BODY = 32 * 1024;

const fail = (status: number, error: string) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: NextRequest) {
  const url = process.env.CLYRIX_LEADS_URL;
  const key = process.env.CLYRIX_LEADS_KEY;
  if (!url || !key) {
    console.error("[lead] CLYRIX_LEADS_URL / CLYRIX_LEADS_KEY are not set; enquiry not sent.");
    return fail(503, "Our enquiry form is down for a moment. Please call or WhatsApp us.");
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY) return fail(413, "That message is too long.");
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, "Something went wrong. Please try again.");
  }
  if (typeof body.form !== "string" || !FORMS.has(body.form)) return fail(400, "Unknown form.");

  // Bots fill every field; people never see the honeypot. Answer as if it worked.
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": key },
      body: JSON.stringify({
        form: body.form,
        formName: body.formName,
        fields: body.fields,
        items: body.items,
        page: body.page,
        utm: body.utm,
        origin: req.headers.get("origin") || "",
        visitor: { ip, userAgent: req.headers.get("user-agent") || "" },
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) return NextResponse.json({ ok: true });
    // Visitor-facing problems (a missing field, too many tries) come back as-is; setup problems don't.
    if (res.status === 400 || res.status === 429) return fail(res.status, data.error || "Please check the form and try again.");
    console.error("[lead] Clyrix refused the enquiry:", res.status, data.error);
    return fail(502, "We couldn't send your enquiry. Please try again, or call or WhatsApp us.");
  } catch (err) {
    console.error("[lead] Clyrix unreachable:", err);
    return fail(502, "We couldn't send your enquiry. Please try again, or call or WhatsApp us.");
  }
}
