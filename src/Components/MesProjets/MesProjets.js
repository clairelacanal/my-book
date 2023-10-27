import React from "react";
import './MesProjets.css';
import food from '../images/foods.jpg';
import plants from '../images/plants.jpg';
import child from '../images/toys.jpg';

class MesProjets extends React.Component {
    render(){
        return (
            <section id="mes-projets">
                <h1>Récents projets.</h1>
                <p>Dernières réalisations</p>
                <div className="projets-background">
                    <article className="app-react-food">
                        <button><a href="https://basil-recipes.herokuapp.com/" target="_blank" rel="noopener noreferrer">BASIL l'appli anti-gaspi</a></button>
                    </article>
                    <article className="app-react-plant">
                        <button><a href="https://plant-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer">PLANT-SITTER, gardiennage de plantes vertes</a></button>
                    </article>
                    <article className="app-react-kids">
                        <button><a href="https://plant-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer">NOUNOURS A FAIM, en construction</a></button>
                    </article>
                </div>
            </section>
        )
    }
}

export default MesProjets;