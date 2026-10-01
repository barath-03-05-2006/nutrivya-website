import { steps } from "../data.js";
import Reveal from "./Reveal.jsx";
import Device from "./Device.jsx";

export default function HowItWorks() {
  return (
    <section id="how" className="band how">
      <div className="wrap">
        <Reveal>
          <h2>How Nutrivya works</h2>
          <p className="sub">Six simple steps from your first login to real results. Sample screens shown for illustration.</p>
        </Reveal>
        <div className="timeline">
          {steps.map((s, i) => (
            <div className={`step ${i % 2 ? "flip" : ""}`} key={s.title}>
              <Reveal from={i % 2 ? "right" : "left"} className="step-text">
                <div className="num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal from={i % 2 ? "left" : "right"} delay={150} className="step-visual">
                <Device screen={s.screen} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
