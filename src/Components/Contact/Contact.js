import React from "react";
import './Contact.css';
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
                            <div className="color"><FontAwesomeIcon icon={ faMobile} className="icon"/></div>
                                <p>06.34.56.63.26</p>
                        </div>
                        <div>
                            <div className="color"><FontAwesomeIcon icon={ faEnvelope} className="icon"/></div>
                                <p>lacanal.claire@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;