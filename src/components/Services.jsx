import { services } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal>
          <h2>Our nutrition services</h2>
          <p className="sub">Expert dietitian guidance for every health goal.</p>
        </Reveal>
        <div className="services">
          {services.map(([icon, title], i) => (
            <Reveal key={title} delay={(i % 5) * 90 + Math.floor(i / 5) * 150}>
              <div className={`service ${i === services.length - 1 ? "accent" : ""}`}>
                <div className="sicon">{icon}</div>
                {title}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
