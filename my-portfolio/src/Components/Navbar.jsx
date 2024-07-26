import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
            PORTFOLIO
          </ScrollLink>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
              About
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="education" smooth={true} duration={500} onClick={closeMenu}>
              Education
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="skills" smooth={true} duration={500} onClick={closeMenu}>
              Skills
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="projects" smooth={true} duration={500} onClick={closeMenu}>
              Projects
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
