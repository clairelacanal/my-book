import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Accueil from './Components/Accueil/Accueil';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MesProjets from './Components/MesProjets/MesProjets';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import LegalInfo from './Components/Footer/LegalInfo/LegalInfo';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
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

  // Home page component that includes Accueil, About, etc.
  const HomePage = () => (
    <>
      <Accueil />
      <About />
      <Services />
      <MesProjets />
      <Contact />
    </>
  );

  return (
    <div className="App">
      <header>
        {isMobile ? <BurgerMenu /> : <Navbar className={isTablet ? 'tablet-navbar' : ''} />}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<LegalInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
