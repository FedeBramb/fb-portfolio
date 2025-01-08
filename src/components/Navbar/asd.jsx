import React from "react";
import Sidebar from "../Sidebar/Sidebar.component";
import { Link } from "react-scroll"; // Importa react-scroll
import { motion } from "framer-motion";
import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Federico Brambilla
        </motion.span>
        <div className="navigation">
          {/* Collegamenti con smooth scrolling */}
          <ul>
            <li>
              <Link to="Homepage" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" smooth={true} duration={500}>
                Servizi
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} duration={500}>
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link to="Portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="Contatti" smooth={true} duration={500}>
                Contatti
              </Link>
            </li>
          </ul>
        </div>
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
