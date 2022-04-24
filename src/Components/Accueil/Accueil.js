import React from "react";
import "./Accueil.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';



class Accueil extends React.Component{

    render(){
        return(
            <section className="presentation">
                <div className="presentation-background">
                    <div className="background-image">
                        <h1>Développeuse Web.|</h1>
                        <div className="arrow-down">
                            <a href="#about"><FontAwesomeIcon icon={ faArrowDown}/></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Accueil;