import React from "react";
import './Presentation.css';
import Logo from '../images/Claire Lacanal -sign.png';

class Presentation extends React.Component {
    render(){
        return(
            <section className="presentation-me">
                <h1>Salut ! Je suis <span>Claire LACANAL</span></h1>
                <p>Développeuse web, je vous propose mes services afin de promouvoir vos activités sur la toile.</p>
                <p>De la charte graphique, en passant par la réalisation et le conseil, je vous accompagne dans vos projets digitaux.</p>
                <img src={Logo} alt="logo-signature"/>
                <hr/>
            </section>
        )
    }
}

export default Presentation;