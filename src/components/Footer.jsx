// Ported verbatim from ui_kits/website/Footer.jsx; inline styles unchanged;
// only the window-global / Lucide plumbing is swapped for imports.

import { Icon, Button } from "./primitives.jsx";

export function Footer({ onNavigate }) {
  const cols = [
    ["Explore", [["Competitions", "competitions"], ["Officer Team", "officers"], ["Classes", "classes"]]],
  ];
  return (
    <footer style={{ background: "var(--deca-blue-darker)", color: "#fff" }}>
      <div className="container footer-grid" style={{
        display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr", gap: 40, padding: "64px 24px 40px",
      }}>
        <div>
          <img src="/assets/logo-white.png" alt="Foothill DECA" style={{ height: 36 }} />
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 14, lineHeight: 1.6, marginTop: 18, maxWidth: 280 }}>
            Preparing emerging leaders and entrepreneurs at Foothill High School in Pleasanton, California.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {[
              { n: "instagram", href: "https://www.instagram.com/foothilldeca/", external: true },
              { n: "mail", href: "mailto:foothilldeca@gmail.com", external: false },
            ].map(({ n, href, external }) => (
              <a key={n} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
                style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(255,255,255,.1)",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Icon name={n} size={18} color="#fff" />
              </a>
            ))}
          </div>
        </div>

        {cols.map(([title, links]) => (
          <div key={title}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
              color: "rgba(255,255,255,.55)", marginBottom: 16 }}>{title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {links.map(([label, id]) => (
                <a key={label} onClick={() => id && onNavigate(id)}
                   style={{ cursor: "pointer", fontSize: 15, color: "rgba(255,255,255,.82)" }}>{label}</a>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
            color: "rgba(255,255,255,.55)", marginBottom: 16 }}>Get Involved</div>
          <Button variant="primary" onBlue onClick={() => onNavigate("membership")}>Join Us</Button>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
            color: "rgba(255,255,255,.55)", marginBottom: 16 }}>Contact</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15, color: "rgba(255,255,255,.82)" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Icon name="mail" size={17} color="rgba(255,255,255,.6)" />foothilldeca@gmail.com</div>
            <a href="https://www.instagram.com/foothilldeca/" target="_blank" rel="noreferrer" style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,.82)" }}><Icon name="instagram" size={17} color="#9db1c5" />@foothilldeca</a>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="map-pin" size={17} color="rgba(255,255,255,.6)" /><span>4375 Foothill Rd,<br/>Pleasanton, CA 94588</span></div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
          padding: "20px 24px", fontSize: 13, color: "rgba(255,255,255,.55)" }}>
          <span>© 2026 Foothill DECA. A chapter of DECA Inc.</span>
          <span>Designed &amp; Developed by Shalin Madabhavi</span>
        </div>
      </div>
    </footer>
  );
}
