// Ported verbatim from ui_kits/website/Pages.jsx (ContactPage); inline styles
// & CSS values unchanged; only the window-global / Lucide plumbing is swapped.

import { useForm, ValidationError } from "@formspree/react";
import { Section, Icon, Button } from "./primitives.jsx";
import { PageBanner } from "./OfficersPage.jsx";

export function ContactPage() {
  const [state, handleSubmit] = useForm("mzdqpvpa");
  const sent = state.succeeded;
  const field = {
    width: "100%", boxSizing: "border-box", fontFamily: "var(--font-sans)", fontSize: 15,
    padding: "12px 14px", border: "1px solid var(--color-border-input)", borderRadius: "var(--radius-sm)", color: "var(--gray-800)",
  };
  const label = { fontSize: 13, fontWeight: 600, color: "var(--gray-800)", display: "block", marginBottom: 7 };
  return (
    <>
      <PageBanner eyebrow="Say Hello" title="Get in Touch"
        subtitle="Questions about joining, competitions, or sponsorship? We'd love to hear from you." />
      <Section>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56 }}>
          <div>
            <h2 style={{ fontSize: 28, margin: "0 0 20px" }}>Reach the chapter</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                ["mail", "Email", "foothilldeca@gmail.com", "mailto:foothilldeca@gmail.com"],
                ["instagram", "Instagram", "@foothilldeca", "https://www.instagram.com/foothilldeca/"],
                ["map-pin", "Find us", "Foothill High School · 4375 Foothill Rd, Pleasanton, CA"],
              ].map(([ic, t, v, href]) => (
                <div key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--deca-blue-light)", flex: "none",
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={ic} size={20} color="var(--deca-blue)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: ".04em" }}>{t}</div>
                    <div style={{ fontSize: 16, color: "var(--gray-800)", marginTop: 2 }}>
                      {href
                        ? <a href={href} target={ic === "mail" ? undefined : "_blank"} rel="noreferrer" style={{ color: "var(--gray-800)" }}>{v}</a>
                        : v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: 30, boxShadow: "var(--shadow-md)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div style={{ color: "var(--deca-blue)", marginBottom: 14 }}><Icon name="check-circle-2" size={48} /></div>
                <h3 style={{ fontSize: 22, margin: "0 0 8px" }}>Thanks for reaching out!</h3>
                <p style={{ color: "var(--gray-600)", margin: 0 }}>An officer will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div><label style={label}>Full name</label><input className="kit-field" name="name" style={field} placeholder="Your name" required /></div>
                  <div><label style={label}>Email</label><input className="kit-field" type="email" name="email" style={field} placeholder="you@example.com" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: "var(--deca-red, #E0383E)", fontSize: 13, marginTop: 5 }} />
                  </div>
                </div>
                <div><label style={label}>I'm interested in</label>
                  <select className="kit-field" name="interest" style={field}>
                    <option>Joining Foothill DECA</option><option>Competitions</option><option>Sponsorship</option><option>Something else</option>
                  </select>
                </div>
                <div><label style={label}>Message</label><textarea className="kit-field" name="message" style={{ ...field, minHeight: 110, resize: "vertical" }} placeholder="Tell us a little more…" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: "var(--deca-red, #E0383E)", fontSize: 13, marginTop: 5 }} />
                </div>
                <Button variant="primary" style={{ justifyContent: "center", opacity: state.submitting ? 0.7 : 1 }}>{state.submitting ? "Sending…" : "Send message"}</Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
