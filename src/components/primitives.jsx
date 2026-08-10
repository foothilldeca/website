// Shared primitives for the Foothill DECA website UI kit.
// Ported from ui_kits/website/components.jsx — inline styles verbatim;
// only the Lucide-CDN plumbing is swapped for the lucide-react package.

import { icons } from "lucide-react";

// kebab-case (data-lucide name) -> PascalCase (lucide-react export key)
function toPascal(name) {
  return name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

// --- Icon: thin wrapper over Lucide ---------------------------------------
export function Icon({ name, size = 20, color, strokeWidth = 2, style = {} }) {
  const Cmp = icons[toPascal(name)];
  if (!Cmp) return null;
  return (
    <span style={{ display: "inline-flex", color, lineHeight: 0, ...style }}>
      <Cmp size={size} strokeWidth={strokeWidth} color={color} />
    </span>
  );
}

// --- Button ----------------------------------------------------------------
export function Button({ variant = "primary", children, onClick, arrow, onBlue, style = {} }) {
  const base = {
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: "var(--radius-sm)",
    padding: "13px 26px",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    transition: "all var(--dur-base) var(--ease-out)",
    whiteSpace: "nowrap",
  };
  const variants = {
    primary: onBlue
      ? { background: "#fff", color: "var(--deca-blue-dark)" }
      : { background: "var(--deca-blue)", color: "#fff" },
    secondary: onBlue
      ? { background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.65)" }
      : { background: "transparent", color: "var(--deca-blue)", border: "1px solid var(--deca-blue)" },
  };
  const hoverClass = onBlue ? "btn-onblue" : "btn";
  return (
    <button
      className={`${hoverClass} ${variant}`}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
      {arrow && <Icon name="arrow-right" size={17} />}
    </button>
  );
}

// --- Section wrapper (alternating bg + vertical rhythm) --------------------
export function Section({ alt, tint, children, style = {}, id }) {
  const bg = tint ? "var(--color-bg-tint)" : alt ? "var(--color-bg-alt)" : "var(--white)";
  return (
    <section id={id} style={{ background: bg, padding: "var(--section-y) 0", ...style }}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, style = {} }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--deca-blue)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// --- DECA diamond watermark (official emblem art, white silhouette) --------
export function DiamondWatermark({ opacity = 0.10, size = 220, style = {} }) {
  return (
    <img src="/assets/deca-diamond-white.png" alt="" aria-hidden="true"
      style={{ position: "absolute", width: size, height: "auto", opacity, ...style }} />
  );
}
