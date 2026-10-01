import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import Services from "./components/Services.jsx";
import GetApp from "./components/GetApp.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="topband">
        <div className="wrap">
          <Hero />
          <Stats />
        </div>
      </div>
      <HowItWorks />
      <Features />
      <Services />
      <GetApp />
      <Footer />
    </>
  );
}
