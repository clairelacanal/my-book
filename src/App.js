import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Accueil from './Components/Accueil/Accueil';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MesProjets from './Components/MesProjets/MesProjets';
import Baniere from './Components/Banniere/Banniere';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Met à jour la largeur de la fenêtre lorsque la fenêtre est redimensionnée
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div className="App">
      <header>
        {isMobile ? <BurgerMenu /> : <Navbar className={isTablet ? 'tablet-navbar' : ''} />}
      </header>
      <main>
        <Accueil />
        <About />
        <Services />
        <MesProjets />
        <Baniere />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
