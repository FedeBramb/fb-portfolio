import { motion } from "framer-motion";

import './CaretCursor.styles.scss';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 0.7,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

const CaretCursor = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="line"
    />
  );
};

export default CaretCursor;
