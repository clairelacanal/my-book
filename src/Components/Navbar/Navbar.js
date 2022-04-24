import React, {useState, useEffect} from "react";
import './Navbar.css';

function Navbar(){

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleMenuSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize', changeWidth);

        return() => {
            window.addEventListener('resize', changeWidth);
        }
    }, [])

    return(
        <nav>
        <h1>Créaweb</h1>
        {(toggleMenu || largeur > 500) && (
            <ul className="liste">
                    <li className="items"><a href="#about">A propos</a></li>
                    <li className="items"><a href="#services">Services</a></li>
                    <li className="items"><a href="#mes-projets">Projets</a></li>
                    <li className="items"><a href="#contact">Contact</a></li>
                </ul>
        )}
            <button onClick={toggleMenuSmallScreen} className="btn">BTN</button>
        </nav>
    )
}

export default Navbar;