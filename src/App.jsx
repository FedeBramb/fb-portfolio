import React from 'react';

import Navbar from './components/Navbar/Navbar.component.jsx';
import Hero from './components/Hero/Hero.component.jsx';
import Parallax from './components/Parallax/Parallax.component.jsx';
import About from './components/About/About.component.jsx';
import Portfolio from './components/Portfolio/Portfolio.component.jsx';
import Contact from './components/Contact/Contact.component.jsx';

import './App.scss'


function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="portfolio" />
      </section>
      <section id='About'>
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="services" />
      </section>
        <Portfolio />
      <section id='Contatti'>
        <Contact />
      </section>
    </div>
  )
}

export default App
