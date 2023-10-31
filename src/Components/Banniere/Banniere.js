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

  fermerDevisPopup = () => {
    this.setState({ afficherDevisPopup: false });
  };
  

  render() {
    const { afficherDevisPopup } = this.state;

    return (
      <section className="banniere">
        <div className="background-banniere">
          <p>Avez-vous une idée de projet ?</p>
          <h1>Travaillons ensemble efficacement !</h1>
          <button onClick={this.afficherDevisPopup}>Obtenir un devis</button>
          {afficherDevisPopup && (
            <div className="devis-popup">
              <div className="devis-popup-contenu">
                <ObtenirUnDevisForm/>
                <button className="fermer" onClick={this.fermerDevisPopup}>Fermer</button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Banniere;

