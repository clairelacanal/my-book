import React, { Component } from "react";
import './Banniere.css';
import ObtenirUnDevisForm from "../Devis/ObtenirUnDevisForm";

class Baniere extends Component {
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
                <span className="fermer" onClick={this.fermerDevisPopup}>
                  &times;
                </span>
                <ObtenirUnDevisForm/>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Baniere;

