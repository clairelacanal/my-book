import React from "react";
import './Banniere.css';

class Baniere extends React.Component{
    render(){
        return(
            <section className="banniere">
                <div className="background-banniere">
                    <p>Avez-vous une idée de projet ?</p>
                    <h1>Travaillons ensemble efficacement !</h1>
                    <button>Obtenir un devis</button>
                </div>
            </section>
        )
    }
}

export default Baniere;
