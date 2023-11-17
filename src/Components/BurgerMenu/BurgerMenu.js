import React, { useState } from 'react';
import './BurgerMenu.css';


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open fixed' : ''}`} onClick={toggleMenu} aria-label="Menu Principal">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li className='apropos'>
            <a href="#about" onClick={toggleMenu} aria-label="En savoir plus sur moi">A Propos</a>
            <hr/>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu} aria-label="Présentation de mes services">Services</a>
            <hr/>
          </li>
          <li>
            <a href="#mes-projets" onClick={toggleMenu} aria-label="Présentation de mes projets">Projets</a>
            <hr/>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} aria-label="Contactez-moi">Contact</a>
            <hr/>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;