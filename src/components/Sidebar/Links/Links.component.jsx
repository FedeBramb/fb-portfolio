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

const Links = ({ toggleSnapAlign, setOpen }) => {
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
            duration={700} // Durata dello scrolling in millisecondi
            onClick={toggleSnapAlign} // Disabilita lo snap al click
            onSetActive={() => setOpen(false)} // Chiude la sidebar al click
            spy={true} // Aggiorna l'elemento attivo durante lo scrolling
          >
            {item}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
