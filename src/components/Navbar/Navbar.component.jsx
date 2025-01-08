import React from "react";
import Sidebar from "../Sidebar/Sidebar.component";

import { motion } from "framer-motion";
import "./Navbar.styles.scss";

const Navbar = ({ toggleSnapAlign }) => {
  return (
    <div className="navbar-container">
      <Sidebar toggleSnapAlign={toggleSnapAlign}  />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Federico Brambilla
        </motion.span>
        <div className="social">
          <a href="https://github.com/FedeBramb" target="_blank">
            <img
              src="./SocialIcons/Github-icon.svg"
              alt="Github Profile"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/federico-brambilla-4486971b1/"
            target="_blank"
          >
            <img
              src="./SocialIcons/LinkedIn-icon.svg"
              alt="LinkedIn Profile"
              title="LinkedIn"
            />
          </a>
          <a href="/FB_FrontEndDev_2024.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="./SocialIcons/Resume-icon.svg"
              alt="Resume-icon"
              title="Curriculum"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
