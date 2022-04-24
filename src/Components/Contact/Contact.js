import React from "react";
import './Contact.css';
import Formulaire from "../Formulaire/Formulaire";
import Map from '../Map/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow, faMobile } from '@fortawesome/free-solid-svg-icons';



class Contact extends React.Component {
    render(){
        return(
            <section id="contact">
                <div className="background-contact">
                    <h1>Contactez-moi.</h1>
                    <div className="infos-contact">
                        <div>
                            <div className="color"><FontAwesomeIcon icon={ faLocationArrow } className="icon"/></div>
                            <h5>Ma localisation :</h5>
                            <p>92 rue de Charenton</p>
                        </div>
                        <div>
                            <div className="color"><FontAwesomeIcon icon={ faMobile} className="icon"/></div>
                            <h5>Mon téléphone :</h5>
                            <p>06.34.56.63.26</p>
                        </div>
                        <div>
                            <div className="color"><FontAwesomeIcon icon={ faEnvelope} className="icon"/></div>
                            <h5>Mon email :</h5>
                            <p>lacanal.claire@gmail.com</p>
                        </div>
                    </div>
                    <div className="form-map">
                        <div className="formulaire">
                            <Formulaire/>
                        </div>
                        <div className="map">
                            <Map/>
                        </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Contact;