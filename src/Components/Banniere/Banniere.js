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
    console.log("afficherDevisPopup appelé");
    this.setState({ afficherDevisPopup: true });
  };

  render() {
    const { afficherDevisPopup } = this.state;

    return (
      <section className="banniere">
        <div className="background-banniere">
          <p>Avez-vous une idée de projet ?</p>
          <h1>Travaillons ensemble efficacement !</h1>
          <button onClick={this.afficherDevisPopup} className="obtenirDevis-button">Obtenir un devis</button>
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
