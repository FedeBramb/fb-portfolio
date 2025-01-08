import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Navbar from "./components/Navbar/Navbar.component.jsx";
import Hero from "./components/Hero/Hero.component.jsx";
import Parallax from "./components/Parallax/Parallax.component.jsx";
import About from "./components/About/About.component.jsx";
import Portfolio from "./components/Portfolio/Portfolio.component.jsx";
import Contact from "./components/Contact/Contact.component.jsx";

import "./App.scss";

function App() {
  const [snapClass, setSnapClass] = useState("snap-start");

  // Alterna scroll-snap-align start/none evita interferenze con smooth-scroll
  const toggleSnapAlign = () => {
    setSnapClass("snap-none");
    setTimeout(() => setSnapClass("snap-start"), 500);
  }

  return (
    <div> {/* Applica lo stato dinamico */}
      <section id="Homepage" className={snapClass}>
        <Navbar toggleSnapAlign={toggleSnapAlign} />
        <Hero />
      </section>
      <section id="Services" className={snapClass}>
        <Parallax type="portfolio" />
      </section>
      <section id="About" className={snapClass}>
        <About />
      </section>
      <section id="Portfolio" className={snapClass}>
        <Parallax type="services" />
      </section>
        <Portfolio />
      <section id="Contatti" className={snapClass}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
