// Ported verbatim from ui_kits/website/Hero.jsx — inline styles & CSS values
// unchanged; only the window-global / Lucide plumbing is swapped for imports.

// Colorful segmented bar across the bottom of the hero (DECA homepage motif)
export function ColorBar() {
  const segs = ["#F2C94C", "#9AA0A6", "#1FA463", "#0072CE", "#E0383E", "#7DC243"];
  return (
    <div style={{ display: "flex", width: "100%", height: 12 }}>
      {segs.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
    </div>
  );
}

export function Hero({ onNavigate }) {
  return (
    <section style={{ position: "relative", background: "#0072CE" }}>
      <div style={{
        position: "relative",
        minHeight: "min(78vh, 720px)",
        backgroundImage: "url('/assets/new-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}>
        {/* left protection gradient so white text stays legible */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(0,86,165,.85) 0%, rgba(0,98,189,.55) 32%, rgba(0,110,206,.12) 52%, rgba(0,110,206,0) 66%)",
        }} />

        <div className="container" style={{ position: "relative", width: "100%" }}>
          <div style={{ maxWidth: 640, padding: "40px 0", marginLeft: -24 }}>
            <h1 className="hero-headline" style={{
              color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(40px, 5.6vw, 74px)", lineHeight: 1.04,
              letterSpacing: "-.01em", textTransform: "uppercase", margin: 0,
              maxWidth: 640,
              textShadow: "0 2px 24px rgba(0,30,70,.25)",
            }}>
              Foothill's Emerging Leaders
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 38, flexWrap: "wrap" }}>
              <button onClick={() => onNavigate("membership")} className="hero-pill" style={{
                fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 700, color: "#fff",
                background: "transparent", border: "2px solid rgba(255,255,255,.9)",
                borderRadius: 999, padding: "13px 38px", cursor: "pointer", whiteSpace: "nowrap",
                transition: "all var(--dur-base) var(--ease-out)",
              }}>Join Us</button>
            </div>
          </div>
        </div>
      </div>

      <ColorBar />
    </section>
  );
}
