import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { projects } from "./projects";

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import "./Portfolio.styles.scss";

// Progetto 
const Single = ({ project }) => {
  const [isOpenWindow, setIsOpenWindow] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const ref = useRef(null);

  const openModal = () => setIsOpenWindow(true);
  const closeModal = () => setIsOpenWindow(false);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // 0 rappresenta top view, 1 bottom view, a 0 sarà a -300, e a fine 300
  const y = useTransform(scrollYProgress, [0, 1], [-300, 210]);

  return (
    <section >
      {isOpenWindow && 
        <>
          <div className="overlay-blur"></div>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h2 className="overview_title">Panoramica progetto:</h2>
            <div className="overview_container">
              {project.overview_sections.map((section, index) => (
                <div key={index} className="overview_section">
                <button
                  onClick={() => toggleSection(index)}
                  className="section-header"
                  style={{backgroundColor: openSection === index ? "#ffb700" : "#0c0c1d"}}
                >
                  <span 
                    style={{color: openSection === index ? "#0c0c1d" : "#d7d7d7"}}>
                    {section.title}
                  </span>
                  <img
                    src={openSection === index 
                      ? "https://icongr.am/fontawesome/chevron-up.svg?size=20&color=0c0c1d"
                      : "https://icongr.am/fontawesome/chevron-down.svg?size=20&color=fcfcfc"}
                    alt={openSection === index ? "Chiudi sezione" : "Apri sezione"}
                    className="section_icon"
                  />
                </button>
                {openSection === index && (
                  <div className="section-content">
                    { (Array.isArray(section.content)) ? section.content.map(content => (<li key={index}>{content}</li>)) : <p>{section.content}</p>}
                  </div>
                )}
              </div>
              ))}
            </div>
          </div>
        </>
      }
      <div className="container">
        <div className="wrapper">
          <Swiper 
            modules={[Pagination, Autoplay]} 
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            className="mySwiper"
            pagination={{ clickable: true }}
            ref={ref}>
              {project.imgPreview.map(({ id, url }) => (
                <SwiperSlide key={`preview-${id}`}>
                  <img src={url} alt="preview" />
                </SwiperSlide>
              ))}
          </Swiper>
          <motion.div 
            className="textContainer" 
            style={{y}} 
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}}>
            <h2>{project.title}</h2>
            <ul className="skills">
              {project.skills.map((skill, index) => (
                <li className="skill" key={index}>{skill}</li>
              ))}
            </ul>
            <p>{project.desc}</p>
            <div className="buttons-container">
              <div className="tooltip-container">
                <a href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="link-demo">
                  Demo
                </a>
                  <span className="tooltip-text">
                    Aspettare qualche secondo per far si che render.com carichi il Database, grazie!
                  </span>
              </div>
              <a href={project.code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-demo">
                Codice
              </a>
              <a href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-demo"
                onClick={openModal}
              >
                Descrizione
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// Raccolta dei progetti
const Portfolio = () => {
  const ref = useRef();
    // index 0 elemento, index 1 view
    // start = bordo superiore end = bordo inferiore
    // Inizialmento sarà larga 100% andando ad accorciarsi
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Effetto "molla"
  // stiffness: più alto è il valore, più veloce e rigida sarà l'animazione.
  // damping: più alto il valore più si stabilizzerà velocemente sul finale.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Progetti</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
        {projects.map((project) => (
          <Single project={project} key={project.id} />
        ))}
    </div>
  );
};

export default Portfolio;