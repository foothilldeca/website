// Ported verbatim from ui_kits/website/Pages.jsx (MembershipPage); inline
// styles & CSS values unchanged; only the window-global / Lucide plumbing is
// swapped for ES imports.

import { useState } from "react";
import { Section, Icon, Eyebrow, Button } from "./primitives.jsx";
import { PageBanner } from "./OfficersPage.jsx";

const PILLARS = [
  ["graduation-cap", "Learn", "Enrich your career knowledge and skills for your future pursuits."],
  ["gavel", "Lead", "Enhance your leadership skills as you become a next gen business professional."],
  ["trophy", "Compete", "Engage in competitive events to prove your business prowess and earn DECA Glass."],
  ["globe", "Discover", "Experience travel as a business professional as you discover new places."],
];

const STEPS = [
  ["Complete the membership form", "Fill out the Foothill DECA membership form by Friday, September 20th."],
  ["Join the Google Classroom", "Use join code QHBZVUB for club updates, resources, and opportunities."],
  ["Submit your $35 donation", [
    "$35 check payable to Tri-Valley ROP",
    "Member's first & last name in the “For” line",
    "Turn in to a DECA officer in Mrs. Raaker's room (A-4)",
    "For financial assistance, please email traaker@pleasantonusd.net",
  ]],
  ["You're registered!", "Watch for club updates and opportunities. Questions? Email foothilldeca@gmail.com."],
];

const FAQS = [
  ["Who can join Foothill DECA?", "Any currently enrolled Foothill High School student is welcome, and no prior business experience is needed."],
  ["How can I compete?", "To be eligible to compete, you must be currently enrolled in one of the ROP Business classes: Integrated Marketing Communications (IMC), Sports & Entertainment Marketing* (SEM) or Economics of Business Ownership* (EBO).", "*Course offerings rotate every other year."],
  ["Do I have to compete?", "Competition is encouraged but optional. You can take part in meetings, Mini Conferences, and chapter events without competing, though competing is where DECA gets really exciting."],
  ["When does the chapter meet?", "Most of DECA happens inside your ROP Business class, so there aren't many extra meetings required (except for mandatory preconference meetings). Beyond that, we hold weekly lunch meetings on Fridays in room A-4, open to everyone, whether or not you're enrolled in a class."],
];

function FaqItem({ q, a, note }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 4px",
        fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 600, color: "var(--gray-800)",
      }}>
        {q}
        <span style={{ color: "var(--deca-blue)", transform: open ? "rotate(45deg)" : "none", transition: "transform var(--dur-base) var(--ease-out)", flex: "none" }}>
          <Icon name="plus" size={22} />
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 4px 22px", maxWidth: 720 }}>
          <p style={{ fontSize: 15.5, color: "var(--gray-600)", lineHeight: 1.6, margin: 0 }}>{a}</p>
          {note && <p style={{ fontSize: 13, color: "var(--gray-400)", fontStyle: "italic", margin: "8px 0 0" }}>{note}</p>}
        </div>
      )}
    </div>
  );
}

export function MembershipPage({ onNavigate }) {
  return (
    <>
      <PageBanner eyebrow="Get Involved" title="Become a Member"
        subtitle="Membership is open to every Foothill student. Here's what you get and how to join." />

      <Section tint>
        <div className="bene-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--gap-grid)" }}>
          {PILLARS.map(([icon, t, d]) => (
            <div key={t} style={{ background: "var(--deca-blue)", padding: "36px 34px",
              display: "flex", flexDirection: "column", alignItems: "flex-start", minHeight: 280 }}>
              <div style={{ marginBottom: 44 }}><Icon name={icon} size={34} color="#fff" /></div>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: "0 0 14px" }}>{t}</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.92)", lineHeight: 1.55, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Eyebrow>How to join</Eyebrow>
          <h2 style={{ fontSize: 34, margin: "12px 0 0" }}>Four steps to get started</h2>
        </div>
        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--gap-grid)" }}>
          {STEPS.map(([t, d], i) => (
            <div key={t} style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: 24, boxShadow: "var(--shadow-sm)" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--deca-blue)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 17, marginBottom: 16 }}>{i + 1}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--color-heading)", margin: "0 0 8px" }}>{t}</h3>
              {Array.isArray(d) ? (
                <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  {d.map((li) => (
                    <li key={li} style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.5 }}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.55, margin: 0 }}>{d}</p>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Button variant="primary" onClick={() => onNavigate("contact")}>Register your interest</Button>
        </div>

        <div style={{ maxWidth: 760, margin: "40px auto 0", background: "#fff",
          border: "1px solid var(--color-border)", borderLeft: "4px solid var(--deca-blue)",
          borderRadius: "var(--radius-md)", padding: "18px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ color: "var(--deca-blue)", flex: "none", marginTop: 1 }}><Icon name="info" size={20} /></span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
              color: "var(--deca-blue)", marginBottom: 5 }}>Notice</div>
            <p style={{ fontSize: 14.5, color: "var(--gray-600)", lineHeight: 1.6, margin: 0 }}>
              Currently, taking a DECA CTE class is a requirement to compete at NorCal, State, and the International
              Career Development Conference. Students not enrolled in a class may still participate in DECA by attending
              the weekly lunch meetings on Fridays in room A-4 and the Mini Conferences hosted by local schools.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontSize: 34, margin: 0 }}>Frequently Asked Questions</h2>
          </div>
          {FAQS.map(([q, a, note]) => <FaqItem key={q} q={q} a={a} note={note} />)}
        </div>
      </Section>
    </>
  );
}
