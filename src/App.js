import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Accueil from './Components/Accueil/Accueil';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MesProjets from './Components/MesProjets/MesProjets';
import Baniere from './Components/Banniere/Banniere';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Accueil/>
        <About/>
        <Services/>
        <MesProjets/>
        <Baniere/>
        <Contact/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
