import React from 'react';

import Skill from './Skill/Skill.component.jsx';

import './About.styles.scss';

const About = () => {
  return (
    <div className='about-container'>
        <h1>La Mia Esperienza</h1>
        <div className='description'>
          <p>
            Ciao! Mi chiamo Federico Brambilla e sono un front-end developer con passione per la creazione 
            di esperienze web intuitive e coinvolgenti. Dopo molti anni di lavoro come cuoco professionista all'estero, 
            ho deciso di seguire la mia vera passione: la tecnologia e la programmazione! Nel mio ruolo di cuoco, 
            ho sviluppato competenze chiave come una forte etica del lavoro, l'attenzione ai dettagli, 
            la gestione del tempo, la capacità di lavorare sotto pressione e la conoscenza di una seconda lingua. 
            Queste abilità mi sono state estremamente utili nella mia transizione verso lo sviluppo web.
            Ho dedicato molto tempo all'apprendimento delle tecnologie front-end come HTML, CSS, JavaScript e React. 
            Troverai alcuni dei miei progetti nella sezione sottostante e altri qui sul mio profilo
            <a href="https://github.com/FedeBramb" target="_blank"> GitHub</a>. Ho frequentato diversi corsi 
            di Web Development su <a href="https://www.linkedin.com/company/zerotomastery/?originalSubdomain=ca" target="_blank">ZTM academy </a> 
            e sto attualmente seguendo un corso specifico su React, che ha ulteriormente alimentato 
            la mia passione per il front-end. Ho anche completato corsi ed esercizi su 
            <a href="https://www.freecodecamp.org/LilBrumb" target="_blank"> FreeCodeCamp</a> e <a href="https://exercism.org/profiles/LilBrumb" target="_blank">Exercism</a>.
          </p>
        </div>
        <div className='skills-container'>
          <Skill />
        </div>
    </div>
  )
}

export default About;


