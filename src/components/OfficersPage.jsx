// Ported verbatim from ui_kits/website/OfficersPage.jsx; inline styles & CSS
// values unchanged; only the window-global / Lucide plumbing is swapped.

import { Section, Icon, DiamondWatermark } from "./primitives.jsx";

// Small reusable page banner
export function PageBanner({ eyebrow, title, subtitle }) {
  return (
    <section style={{ background: "var(--gradient-hero)", position: "relative", overflow: "hidden" }}>
      <DiamondWatermark opacity={.06} size={300} style={{ top: -40, right: "8%" }} />
      <div className="container" style={{ position: "relative", padding: "64px 24px 56px", textAlign: "center" }}>
        {eyebrow && <div style={{ color: "rgba(255,255,255,.8)", fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 14 }}>{eyebrow}</div>}
        <h1 style={{ color: "#fff", fontSize: "clamp(32px,4.4vw,46px)", fontWeight: 800, margin: 0, letterSpacing: "-.02em" }}>{title}</h1>
        {subtitle && <p style={{ color: "rgba(255,255,255,.9)", fontSize: 18, lineHeight: 1.55, margin: "16px auto 0", maxWidth: 660 }}>{subtitle}</p>}
      </div>
    </section>
  );
}

// Roster laid out as explicit rows. Each entry: { title, name?, photo? }.
// Where no name is known yet, the card leads with the title (drop a `name`
// and `photo` in later). Rows with 2 entries center; rows with 3 fill.
const ROWS = [
  [
    { name: "Mrs. Raaker", title: "Advisor", photo: "/assets/mrs-raaker.avif" },
  ],
  [
    { name: "Tyna Chhabra", title: "President", photo: "/assets/tyna-chhabra.png" },
    { name: "Agastya Kuluvalli", title: "Chief Financial Officer", photo: "/assets/agastya-kuluvalli.png" },
  ],
  [
    { name: "Ishan Sharma", title: "Vice President of NorCal", photo: "/assets/ishan-sharma.png" },
    { name: "Aarushi Gupta", title: "NorCal VP of Marketing", photo: "/assets/officer-2.png" },
  ],
  [
    { name: "Joshua Rivera", title: "VP of Membership Development", photo: "/assets/joshua-rivera.png" },
    { name: "Sofia Faust", title: "VP of Chapter Management", photo: "/assets/sofia-faust.png" },
  ],
  [
    { name: "Shalin Madabhavi", title: "Director of Technology", photo: "/assets/shalin-madabhavi.png" },
    { name: "Evan Win", title: "Director of Communications", photo: "/assets/evan-win.png" },
    { name: "Abhee Shah", title: "Director of Training", photo: "/assets/abhee-shah.png" },
  ],
  [
    { name: "Dev Chakraborty", title: "Administrative Assistant", photo: "/assets/dev-c.png" },
  ],
  [
    { name: "Ikshan Sairam", title: "Junior DECA Finance", photo: "/assets/ikshan-sairam.png" },
    { name: "Amin Khayat", title: "Junior DECA Training", photo: "/assets/amin-khayat.png" },
    { name: "Leia Ha", title: "Junior DECA Marketing/Admin", photo: "/assets/leia-ha.png" },
  ],
];

export function OfficerCard({ name, title, photo }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden", borderRadius: 2,
        background: "linear-gradient(150deg,#1f7ae0 0%,#0072CE 55%,#00549E 100%)" }}>
        {photo ? (
          <img src={photo} alt={name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        ) : (
          <>
            <img src="/assets/deca-diamond-white.png" alt="" aria-hidden="true"
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "52%", opacity: .22 }} />
            <Icon name="user-round" size={104} color="rgba(255,255,255,.55)"
              style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)" }} />
          </>
        )}
      </div>
      <div style={{ padding: "16px 2px 0" }}>
        {name ? (
          <>
            <div style={{ fontSize: 19, fontWeight: 700, color: "var(--deca-blue)", lineHeight: 1.2 }}>{name}</div>
            <div style={{ fontSize: 15, color: "var(--gray-800)", marginTop: 5, lineHeight: 1.3 }}>{title}</div>
          </>
        ) : (
          <div style={{ fontSize: 19, fontWeight: 700, color: "var(--deca-blue)", lineHeight: 1.2 }}>{title}</div>
        )}
      </div>
    </div>
  );
}

export function OfficersPage() {
  return (
    <>
      <PageBanner
        eyebrow="2026–27 Leadership"
        title="Meet the Foothill DECA Officer Team"
        subtitle="Foothill DECA's Executive Officers are elected by student members to provide leadership for this academic year."
      />
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {ROWS.map((row, ri) => (
            <div key={ri} className="officer-row" style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px 30px",
            }}>
              {row.map((o) => (
                <div key={o.title} style={{ flex: "1 1 300px", maxWidth: 364 }}>
                  <OfficerCard name={o.name} title={o.title} photo={o.photo} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
