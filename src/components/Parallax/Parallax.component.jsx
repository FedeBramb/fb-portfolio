
import { useRef } from "react"; 
import "./Parallax.styles.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    // Referenza al container
  const ref = useRef();

    // Estrae lo stato dello scorrimento su asse Y
    // Animazione comincia al top del'altezza e finisce
    // quando il top del target raggiunge la base della view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

    // yText: sposta del 500% verso l'alto
    // yBg: sposta del 100% verso l'alto
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type === "services"
        ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I do?" : "Who am I?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;