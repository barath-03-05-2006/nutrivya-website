import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import Services from "./components/Services.jsx";
import GetApp from "./components/GetApp.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Smooth-scroll to sections without adding #something to the URL
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      const id = a.getAttribute("href").slice(1);
      const el = id ? document.getElementById(id) : null;
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

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
