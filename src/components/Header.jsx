// Ported verbatim from ui_kits/website/Header.jsx — inline styles unchanged;
// only the window-global / Lucide plumbing is swapped for imports.

import { useState } from "react";
import { Icon, Button } from "./primitives.jsx";

export function Header({ current, onNavigate }) {
  const [open, setOpen] = useState(false);
  const items = [
    ["competitions", "Competitions"],
    ["officers", "Officers"],
    ["classes", "Classes"],
    ["contact", "Contact"],
  ];

  const go = (id) => { onNavigate(id); setOpen(false); };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, height: "var(--header-h)",
      background: "rgba(255,255,255,.92)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex", alignItems: "center",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a onClick={() => go("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <img src="/assets/logo-blue.png" alt="Foothill DECA" style={{ height: 34 }} />
        </a>

        <nav className="desktop-nav" style={{ display: "flex", gap: 4, marginLeft: 12 }}>
          {items.map(([id, label]) => (
            <a key={id} onClick={() => go(id)}
               className="nav-link"
               style={{
                 cursor: "pointer", padding: "8px 14px", borderRadius: 6,
                 fontSize: 15, fontWeight: 600,
                 color: current === id ? "var(--deca-blue)" : "var(--gray-800)",
                 background: current === id ? "var(--deca-blue-light)" : "transparent",
                 transition: "all var(--dur-fast) var(--ease-out)",
               }}>
              {label}
            </a>
          ))}
        </nav>

        <div className="desktop-nav" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
          <Button variant="primary" onClick={() => go("membership")} style={{ padding: "9px 20px", fontSize: 15 }}>Join Us</Button>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)}
          style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--deca-blue-dark)", display: "none" }}>
          <Icon name={open ? "x" : "menu"} size={26} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" style={{
          display: "block",
          position: "absolute", top: "var(--header-h)", left: 0, right: 0,
          background: "#fff", borderBottom: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-md)", padding: "12px 0",
        }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {items.map(([id, label]) => (
              <a key={id} onClick={() => go(id)}
                 style={{ cursor: "pointer", padding: "13px 8px", fontSize: 16, fontWeight: 600,
                          color: current === id ? "var(--deca-blue)" : "var(--gray-800)",
                          borderBottom: "1px solid var(--color-border)" }}>
                {label}
              </a>
            ))}
            <div style={{ padding: "14px 8px 4px" }}>
              <Button variant="primary" onClick={() => go("membership")} style={{ width: "100%", justifyContent: "center" }}>Join Us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
