import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import SingleProject from './SingleProject.component.jsx/SingleProject.component.jsx';

import { projects } from "./projects";

import "./Portfolio.styles.scss";

// Raccolta dei progetti
const Portfolio = ({ snapClass }) => {
  const ref = useRef();
    // index 0 elemento, index 1 view
    // start = bordo superiore end = bordo inferiore
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
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
        {projects.map((project) => (
          <SingleProject project={project} snapClass={snapClass} key={project.id} />
        ))}
    </div>
  );
};

export default Portfolio;