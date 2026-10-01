import { DOWNLOAD_URL, contact } from "../data.js";
import Reveal from "./Reveal.jsx";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

const icons = {
  mail: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  ),
  wa: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M20 12a8 8 0 1 1-3.3-6.5A8 8 0 0 1 20 12z" />
      <path d="M4 20l1.2-4" />
      <path d="M9.5 8.5c0 3 2 5 5 5l1-1.3-1.8-1-.8.7a3.5 3.5 0 0 1-1.6-1.6l.7-.8-1-1.8z" fill="currentColor" stroke="none" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3.5 3.5 3.5 14.5 0 18M12 3c-3.5 3.5-3.5 14.5 0 18" />
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const items = [
  { type: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { type: "wa", label: "WhatsApp", value: contact.whatsappLabel, href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi Nutrivya, I would like to know more.")}`, external: true },
  { type: "web", label: "Website", value: contact.websiteLabel, href: contact.website, external: true },
  { type: "ig", label: "Instagram", value: contact.instagramLabel, href: contact.instagram, external: true },
];

export default function GetApp() {
  return (
    <section id="get" className="final">
      <div className="wrap center">
        <Reveal>
          <h2>Ready to start your journey?</h2>
          <p>Ask your dietitian for your Nutrivya login, then download the app and begin.</p>
          <a className="btn" href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">Download the app</a>
        </Reveal>

        <Reveal delay={150}>
          <h3 id="contact" className="touch-title">Get in touch</h3>
          <p className="touch-sub">We would love to hear from you. Reach out any time.</p>
        </Reveal>

        <div className="touch-grid">
          {items.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                className="touch-card"
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={`t-icon ${c.type}`}>{icons[c.type]}</span>
                <span className="t-body">
                  <small>{c.label}</small>
                  <b>{c.value}</b>
                </span>
                <span className="t-arrow">→</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="tagline">Nourish. Balance. Thrive.</div>
      </div>
    </section>
  );
}