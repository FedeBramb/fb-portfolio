import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importa react-scroll

// Variants per le animazioni del contenitore
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

// Variants per le animazioni di ogni link
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

const Links = ({ disableSnap, enableSnap }) => {
  const items = ["Homepage", "Portfolio", "Contatti", "About"]; // Gli ID delle sezioni

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={item} // Nome dell'ID della sezione
            smooth={true} // Abilita lo scrolling fluido
            duration={500} // Durata dello scrolling in millisecondi
            onClick={disableSnap} // Disabilita lo snap al click
            onSetActive={enableSnap} // Riabilita lo snap quando la sezione è attiva
          >
            {item}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
