import { features } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Features() {
  return (
    <section id="features" className="band">
      <div className="wrap">
        <Reveal>
          <h2>Everything you need in one app</h2>
          <p className="sub">Built with a dietitian, for real daily eating.</p>
        </Reveal>
        <div className="grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 100}>
              <div className="card">
                <div className="ic">{f.icon}</div>
                <h3>{f.title}</h3>
                <ul>
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
