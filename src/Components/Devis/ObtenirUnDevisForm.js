import React, { useState } from 'react';
import './ObtenirUnDevisForm.css';
import './Confirmation';
import Confirmation from './Confirmation';

function ObtenirUnDevisForm() {
  const [demandeSoumise, setDemandeSoumise] = useState(false);
  const [afficherTitre, setAfficherTitre] = useState(true);
  const [afficherFormulaire, setAfficherFormulaire] = useState(false); // Nouvel état pour gérer l'affichage du formulaire
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDemandeSoumise(true);
    setAfficherTitre(false);
    // Laisser l'affichage du popup activé pour afficher la confirmation

    console.log('Données du formulaire :', { nom, prenom, email, telephone, message });
    setNom('');
    setPrenom('');
    setEmail('');
    setTelephone('');
    setMessage('');
  };

  const handleClose = () => {
    setDemandeSoumise(false);
    setAfficherTitre(true);
    setAfficherFormulaire(false); // Désactiver l'affichage du formulaire
  };

  const ouvrirFormulaire = () => {
    setAfficherFormulaire(true); // Activer l'affichage du formulaire
  };

  const fermerFormulaire = () => {
    handleClose();
  };

  return (
    <>
      <button onClick={ouvrirFormulaire}>Obtenir un devis</button>
      {afficherFormulaire && ( // Utilisez l'état afficherFormulaire pour conditionner l'affichage du formulaire
        <div className='overlay' onClick={fermerFormulaire}>
          <div className='popup' onClick={(e) => e.stopPropagation()}>
            <button onClick={fermerFormulaire} className="close-button">
                  ✖
            </button>
            {afficherTitre && <h2>Obtenir un devis</h2>}
            {!demandeSoumise ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nom">Nom<span className="required">*</span> :</label>
                    <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    className="input-field"
                    />
                </div>
                <div>
                  <label htmlFor="prenom">Prénom<span className="required">*</span> :</label>
                    <input
                    type="text"
                    id="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                    className="input-field"
                    />
                </div>
                <div>
                  <label htmlFor="email">Email<span className="required">*</span> :</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                    />
                </div>
                <div>
                  <label htmlFor="telephone">Téléphone<span className="required">*</span> :</label>
                    <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    required
                    className="input-field"
                    />
                </div>
                <div>
                  <label htmlFor="message">Message<span className="required">*</span> :</label>
                    <textarea
                    id="message"
                    value={message}
                    placeholder='Votre projet...'
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="input-field"
                    />
                </div>
                <button type="submit" className='submit-devis'>Envoyer</button>
              </form>
            ) : (
              <div>
                <Confirmation />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ObtenirUnDevisForm;