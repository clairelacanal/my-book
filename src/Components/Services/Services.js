import React from "react";
import './Services.css';


class Services extends React.Component{
    render(){
        return(
            <section id="services">
                <div className="services-container">
                    <h1>Mes services</h1>
                    <div className="my-services">
                        <div className="proposition-service">
                            <h3>Création de votre site internet</h3>
                            <p>Réalisation de A à Z à votre goût et à votre image</p>
                        </div>
                        <div className="proposition-service">
                            <h3>Refonte de votre site web</h3>
                            <p>Modernisation de votre site web préexistant</p>
                        </div>
                        <div className="proposition-service">
                            <h3>Elaboration de vos contenus web</h3>
                            <p>Création de contenus uniques et originaux qui répondent aux critères d'optimisation SEO</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;