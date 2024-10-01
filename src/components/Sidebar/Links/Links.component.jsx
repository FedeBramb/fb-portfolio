import { motion } from "framer-motion";


// Quando il contenitore è aperto, l'animazione dei figli è scaglionata di 0.1 secondi.
// Quando il contenitore è chiuso, l'animazione dei figli è scaglionata di 0.05 secondi e in direzione inversa
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Definisce le animazioni per ogni elemento figlio (motion.a)
// open: Gli elementi sono nella loro posizione originale e completamente visibili
// closed: Gli elementi sono spostati di 50 pixel verso il basso e invisibili
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Portfolio", "Contatti", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;