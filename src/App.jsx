import React, { useState } from "react";
import { Link } from "react-scroll";

import Navbar from "./components/Navbar/Navbar.component.jsx";
import Hero from "./components/Hero/Hero.component.jsx";
import Parallax from "./components/Parallax/Parallax.component.jsx";
import About from "./components/About/About.component.jsx";
import Portfolio from "./components/Portfolio/Portfolio.component.jsx";
import Contact from "./components/Contact/Contact.component.jsx";

import "./App.scss";

function App() {
  const [snapType, setSnapType] = useState("y mandatory"); // Stato iniziale: snapping attivo

  // Funzione per disabilitare temporaneamente lo snapping
  // Altrimenti lo smooth-scroll interferirebbe con y-mandatory
  const disableSnap = () => setSnapType("none");

  // Funzione per riattivare lo snapping
  const enableSnap = () => setSnapType("y mandatory");

  return (
    <div style={{ scrollSnapType: snapType }}> {/* Applica lo stato dinamico */}
      <section id="Homepage">
        <Navbar disableSnap={disableSnap} enableSnap={enableSnap} />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="portfolio" />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="services" />
      </section>
        <Portfolio />
      <section id="Contatti">
        <Contact />
      </section>
    </div>
  );
}

export default App;
