import { useState } from 'react';
import { motion } from 'framer-motion';

import Links from './Links/Links.component.jsx';
import ToggleButton from './ToggleButton/ToggleButton.component.jsx';

import './Sidebar.styles.scss';

const Sidebar = ({ toggleSnapAlign }) => {
    const [open, setOpen] = useState(false);
 
    const variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px",
          transition: {
            type: "spring",
            stiffness: 20,
          },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
          }
        }
    }
  return (
    // Motion avviene anche per gli elementi figli
    // Variants di animazione che un componente può avere
    <div>
      <motion.div 
        className='sidebar-container'
        animate={open ? "open" : "closed"}
        >
          <motion.div className='bg' variants={variants}>
            <Links toggleSnapAlign={toggleSnapAlign}  />          
          </motion.div>
          <ToggleButton isOpen={open} setOpen={setOpen}/>
      </motion.div>
    </div>
  )
}

export default Sidebar;