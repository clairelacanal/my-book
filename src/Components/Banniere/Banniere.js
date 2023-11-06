import React, { Component } from "react";
import './Banniere.css';
import ObtenirUnDevisForm from "../Devis/ObtenirUnDevisForm";

class Banniere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      afficherDevisPopup: false
    };
  }

  afficherDevisPopup = () => {
    this.setState({ afficherDevisPopup: true });
  };

  render() {
    const { afficherDevisPopup } = this.state;

    return (
      <section className="banniere">
        <div className="background-banniere">
          <p>Avez-vous une idée de projet ?</p>
          <h1>Travaillons ensemble efficacement !</h1>
<<<<<<< HEAD
          <button onClick={this.afficherDevisPopup} className="obtenirDevis-button">Obtenir un devis</button>
=======
          <button className="affichage-devis" onClick={this.afficherDevisPopup}>Obtenir un devis</button>
>>>>>>> 94e7e6358dd3dceb92030f8e7af47e03850ede10
          {afficherDevisPopup && (
            <div className="devis-popup">
              <div className="devis-popup-contenu">
                <ObtenirUnDevisForm/>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Banniere;
