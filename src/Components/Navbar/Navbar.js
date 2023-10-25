import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleMenuSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

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
      {largeur <= 500 && ( // Condition pour afficher le bouton hamburger
        <button
          onClick={toggleMenuSmallScreen}
          className={`btn-hamburger ${toggleMenu ? "btn-hamburger-large-screen" : ""}`}
        >
          &#9776; {/* Icône hamburger */}
        </button>
      )}
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


