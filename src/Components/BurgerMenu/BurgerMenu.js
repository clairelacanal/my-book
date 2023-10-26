import React, { useState } from 'react';
import './BurgerMenu.css';


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li className='apropos'>
            <a href="/a-propos">A Propos</a>
            <hr/>
          </li>
          <li>
            <a href="/services">Services</a>
            <hr/>
          </li>
          <li>
            <a href="/projets">Projets</a>
            <hr/>
          </li>
          <li>
            <a href="/contact">Contact</a>
            <hr/>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;