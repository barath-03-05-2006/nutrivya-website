import VegBowl from "./VegBowl.jsx";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Your personalized nutrition journey <span>starts here.</span>
        </h1>
        <p>
          Nutrivya connects you with your dietitian. Get a meal plan made for you, log what you eat in seconds and watch your progress grow.
        </p>
        <div className="cta">
          <a className="btn" href="#get">Get the app</a>
          <a className="btn alt" href="#how">See how it works</a>
        </div>
      </div>
      <VegBowl />
    </div>
  );
}
