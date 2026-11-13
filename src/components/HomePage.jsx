// Ported verbatim from ui_kits/website/HomePage.jsx; inline styles & CSS
// values unchanged; only the window-global / Lucide plumbing is swapped.

import { Icon, Button, DiamondWatermark } from "./primitives.jsx";
import { Hero } from "./Hero.jsx";

const FEATURES = [
  ["Competitions", "Compete at Minicon, NorCal, State, and ICDC across marketing, finance, hospitality, and management.", "Explore events", "competitions"],
  ["Networking & Community", "Connect with peers, alumni, and industry mentors who share your ambition.", "Meet the team", "officers"],
  ["Resources & Training", "Access study guides, practice exams, and roleplay coaching to prepare and win.", "Start preparing", "training"],
];

// Bold link + circle-arrow, DECA homepage style
export function ArrowLink({ children, onClick, onBlue }) {
  return (
    <a onClick={onClick} className="arrow-link" style={{
      display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer",
      fontSize: 15, fontWeight: 700, letterSpacing: ".01em", whiteSpace: "nowrap",
      color: onBlue ? "#fff" : "var(--deca-blue)",
    }}>
      {children}
      <span className="arrow-circle" style={{
        width: 30, height: 30, borderRadius: "50%", flex: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: onBlue ? "#fff" : "var(--deca-blue)",
        color: onBlue ? "var(--deca-blue)" : "#fff",
        transition: "transform var(--dur-base) var(--ease-out)",
      }}>
        <Icon name="arrow-right" size={16} strokeWidth={2.5} />
      </span>
    </a>
  );
}

export function FeatureColumn({ title, desc, cta, onClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
      <h3 style={{ fontSize: 30, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.1 }}>{title}</h3>
      <p style={{ fontSize: 16.5, color: "rgba(255,255,255,.85)", lineHeight: 1.55, margin: 0, maxWidth: 360 }}>{desc}</p>
      <ArrowLink onBlue onClick={onClick}>{cta}</ArrowLink>
    </div>
  );
}

export function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      {/* Get Involved: text columns on blue (DECA style) */}
      <section style={{ background: "linear-gradient(125deg, #0a86ff 0%, #0072CE 38%, #00396f 100%)", position: "relative", overflow: "hidden" }}>
        <img src="/assets/deca-diamond-white.png" alt="" aria-hidden="true"
          style={{ position: "absolute", right: -120, bottom: -120, width: 460, opacity: .07 }} />
        <div className="container" style={{ position: "relative", padding: "var(--section-y) 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            maxWidth: 780, margin: "0 auto 56px" }}>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.05 }}>Why Foothill DECA</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.85)", lineHeight: 1.6, margin: "18px 0 0", maxWidth: 760 }}>
              Together, we prepare emerging leaders and entrepreneurs for college and careers.
            </p>
            <div style={{ marginTop: 22 }}>
              <ArrowLink onBlue onClick={() => onNavigate("membership")}>Join us</ArrowLink>
            </div>
          </div>
          <div className="involve-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }}>
            {FEATURES.map((f) => (
              <FeatureColumn key={f[0]} title={f[0]} desc={f[1]} cta={f[2]} onClick={() => onNavigate(f[3])} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "var(--gradient-hero)", position: "relative", overflow: "hidden" }}>
        <DiamondWatermark opacity={.06} size={320} style={{ top: -50, right: -40 }} />
        <div className="container" style={{ position: "relative", textAlign: "center", padding: "72px 24px" }}>
          <h2 style={{ color: "#fff", fontSize: 38, margin: "0 0 14px" }}>Ready to become a leader?</h2>
          <p style={{ color: "rgba(255,255,255,.9)", fontSize: 19, margin: "0 auto 30px", maxWidth: 520 }}>
            Membership is open to all Foothill students. Take the first step today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" onBlue onClick={() => onNavigate("membership")}>Join Us</Button>
            <Button variant="secondary" onBlue arrow onClick={() => onNavigate("contact")}>Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
