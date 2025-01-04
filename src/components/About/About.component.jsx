import React from 'react';

import Skill from './Skill/Skill.component.jsx';

import './About.styles.scss';

const About = () => {
  return (
    <div className='about-container'>
        <h1>My Experience</h1>
        <div className='description'>
          <p>
            Hi! My name is Federico Brambilla, and I am a front-end developer with a passion for creating 
            intuitive and engaging web experiences. After many years working as a professional chef abroad, 
            I decided to follow my true passion: technology and programming! In my role as a chef, I 
            developed key skills such as a strong work ethic, attention to detail, time management, 
            the ability to work under pressure, and proficiency in a second language. 
            These skills have been incredibly useful in my transition to web development.
            I have dedicated a lot of time to learning front-end technologies like HTML, CSS, 
            JavaScript, and React. You’ll find some of my projects in the section below, and more on my
            <a href="https://github.com/FedeBramb" target="_blank"> GitHub</a> profile.  I have attended several Web Development courses 
            at <a href="https://www.linkedin.com/company/zerotomastery/?originalSubdomain=ca" target="_blank">ZTM academy </a> 
            and am currently taking a React-specific course, which has further fueled my passion for front-end development. 
            I have also completed courses and exercises on
            <a href="https://www.freecodecamp.org/LilBrumb" target="_blank"> FreeCodeCamp</a> and <a href="https://exercism.org/profiles/LilBrumb" target="_blank">Exercism</a>.
            You can take a look at my <a href="/FB_FrontEndDev_2024.pdf" target="_blank" rel="noopener noreferrer">CV</a>.
          </p>
        </div>
        <div className='skills-container'>
          <Skill />
        </div>
    </div>
  )
}

export default About;


