import React, { useState, useEffect } from "react";
import "./Navbar.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu"; // Importez le composant BurgerMenu

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {/* Intégrez le composant BurgerMenu ici */}
      <BurgerMenu />
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">
            <a href="#about">A propos</a>
          </li>
          <li className="items">
            <a href="#services">Services</a>
          </li>
          <li className="items">
            <a href="#mes-projets">Projets</a>
          </li>
          <li className="items">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

