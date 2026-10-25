"use client";

/**
 * Sends a website enquiry to our /api/lead route, which forwards it to Clyrix (RS Choyal's lead system).
 * Every form on the site uses this, so each lead carries the same context: which form, which page, where the
 * visitor came from (referrer, UTM tags captured on landing by <UtmCapture />).
 */

export type LeadFields = {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  city?: string;
  country?: string;
  interest?: string;
  message?: string;
};

export type LeadItem = { id?: string; name: string; category?: string; size?: string; qty?: number };

const UTM_KEYS = ["source", "medium", "campaign", "term", "content"] as const;
const UTM_STORE = "rscg_utm";
const REFERRER_STORE = "rscg_referrer";

/** Remembers the UTM tags and outside referrer of the visit's landing page, for the rest of the visit. */
export function captureVisitSource() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const k of UTM_KEYS) {
      const v = params.get(`utm_${k}`);
      if (v) utm[k] = v.slice(0, 120);
    }
    if (Object.keys(utm).length) sessionStorage.setItem(UTM_STORE, JSON.stringify(utm));
    const ref = document.referrer;
    if (ref && !ref.startsWith(window.location.origin) && !sessionStorage.getItem(REFERRER_STORE)) {
      sessionStorage.setItem(REFERRER_STORE, ref.slice(0, 500));
    }
  } catch {
    // storage blocked: leads still go through without the source
  }
}

function visitSource() {
  try {
    return {
      utm: JSON.parse(sessionStorage.getItem(UTM_STORE) || "{}") as Record<string, string>,
      referrer: sessionStorage.getItem(REFERRER_STORE) || undefined,
    };
  } catch {
    return { utm: {}, referrer: undefined };
  }
}

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitLead(input: {
  form: string;
  formName: string;
  fields: LeadFields;
  items?: LeadItem[];
  /** The hidden honeypot field's value (people leave it empty). */
  website?: string;
}): Promise<SubmitResult> {
  const { utm, referrer } = visitSource();
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
        page: { url: window.location.href, title: document.title, referrer },
        utm,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) return { ok: true };
    return { ok: false, error: data.error || "We couldn't send your enquiry. Please try again, or call us." };
  } catch {
    return { ok: false, error: "No connection. Please check your internet and try again, or call us." };
  }
}
