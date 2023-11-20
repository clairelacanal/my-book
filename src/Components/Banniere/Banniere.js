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
    return (
      <section className="banniere">
        <div className="background-banniere">
          <p>Avez-vous une idée de projet ?</p>
          <h1>Travaillons ensemble efficacement !</h1>
          <button onClick={this.afficherDevisPopup} className="obtenirDevis-button">
            Obtenir un devis
          </button>
          {this.state.afficherDevisPopup && (
            <ObtenirUnDevisForm fermerPopup={this.fermerDevisPopup} />
          )}
        </div>
      </section>
    );
  }
}

export default Banniere;
