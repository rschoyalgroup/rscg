/**
 * Spam trap: a field people never see (off-screen, skipped by keyboard and autofill) but form-filling bots do.
 * Any value in it makes the enquiry be dropped quietly (app/api/lead and Clyrix both check it).
 */
export default function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}
