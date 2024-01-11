import React from "react";
import './Presentation.css';

class Presentation extends React.Component {
    render(){
        return(
            <section className="presentation-me">
                <h1>Hello !</h1>
                <h2>Je suis <span>Claire LACANAL</span></h2>
                <p>Je recherche une entreprise pour effectuer mon alternance, en qualité de développeuse Front-End ou Full-Stack, sur une période de 12 mois. </p>
                <p>Motivée et prête à apprendre vos technos, je suis la candidate idéale pour vos projets digitaux !</p>
            </section>
        )
    }
}

export default Presentation;