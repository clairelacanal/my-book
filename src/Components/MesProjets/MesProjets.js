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
                    <article className="app-react">
                        <img src={food} alt="food"/>
                        <a href="https://basil-recipes.herokuapp.com/" target="_blank" rel="noopener noreferrer">Basil l'appli anti-gaspi</a>
                    </article>
                    <article className="app-react">
                        <img src={plants} alt="plants"/>
                        <a href="https://plant-sitter.herokuapp.com/" target="_blank" rel="noopener noreferrer">Plant-sitter, le gardiennage de vos plantes vertes</a>
                    </article>
                    <article className="app-react">
                        <img src={child} alt="child"/>
                    </article>
                </div>
            </section>
        )
    }
}

export default MesProjets;