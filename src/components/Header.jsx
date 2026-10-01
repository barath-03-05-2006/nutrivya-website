import { useEffect, useState } from "react";
import { DOWNLOAD_URL } from "../data.js";

const links = [
  ["how", "How it works"],
  ["features", "Features"],
  ["services", "Services"],
  ["contact", "Contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setProgress(max > 0 ? y / max : 0);
      let current = "";
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#">
          {/* Emblem from public/logo.png (hides itself if missing) */}
          <img src="/logo.png" alt="" className="brand-logo" onError={(e) => (e.currentTarget.style.display = "none")} />
          <span className="logo">Nutrivya</span>
        </a>
        <nav className="nav-links" onClick={() => setOpen(false)}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
          ))}
          <a className="cta-pill" href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            Get the app
          </a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <div className="progress" style={{ "--p": `${progress * 100}%` }} />
    </header>
  );
}
