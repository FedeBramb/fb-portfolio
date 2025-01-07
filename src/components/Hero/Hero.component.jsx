import { motion } from "framer-motion";
import "./Hero.styles.scss";

const text = "Hi! I'm Federico Front-End Developer";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Varianti per il paragrafo con la typeAnimation
// Cambiare staggeredChildren per cambiare la velocità di comparsa
const typeSentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Varianti per le singole lettere
const typeLetterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Federico Brambilla</motion.h2>
          <motion.p
            key={text}
            variants={typeSentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, i) => (
              <motion.span key={`${char}-${i}`} variants={typeLetterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front End Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/brambHero.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;