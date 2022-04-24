import React from "react";
import './Formulaire.css';


class Formulaire extends React.Component{
    render(){
        return(
            <section className="formulaire">
                <form action="" method="get" className="contact-form">
                            <div className="names">
                                <input type="text" name="prenom" id="prenom" className="prenom" required placeholder="Prénom *"></input>
                                <input type="text" name="nom" id="nom" required placeholder="Nom *"></input>
                            </div>
                            <div className="sujet">
                                <input type="text" name="sujet" id="sujet" required placeholder='Sujet *'></input>
                            </div>
                            <div className="message">
                                <textarea id="message" name="message" required placeholder='Message *'></textarea>
                            </div>
                            <button>Envoyez le message</button>
                        </form>
            </section>
        )
    }
}

export default Formulaire;