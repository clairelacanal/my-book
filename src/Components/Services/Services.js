import React from "react";
import './Services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faTrowelBricks } from "@fortawesome/free-solid-svg-icons";


class Services extends React.Component{
    render(){
        return(
            <section id="services">
                <div className="services-container">
                    <h1>Mes services.</h1>
                    <div className="my-services">
                        <div className="proposition-service">
                            <FontAwesomeIcon icon={faTrowelBricks} className="icon-service" />
                            <h3>Création d'applications et de sites</h3>
                            <p>Réalisation d'applications et de sites de A à Z</p>
                        </div>
                        <div className="proposition-service">
                            <FontAwesomeIcon icon={faLaptopCode} className="icon-service" />
                            <h3>Refonte d'applications et de sites</h3>
                            <p>Modernisation de vos projets digitaux</p>
                        </div>
                        <div className="proposition-service">
                            <FontAwesomeIcon icon={faPen} className="icon-service"/>
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