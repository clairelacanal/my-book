import React, { useState } from 'react';
import './ObtenirUnDevisForm.css';
import './Confirmation';
import Confirmation from './Confirmation';

function ObtenirUnDevisForm() {
  const [demandeSoumise, setDemandeSoumise] = useState(false);
  const [afficherTitre, setAfficherTitre] = useState(true);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [telephoneErreur, setTelephoneErreur] = useState(false);
  const [emailErreur, setEmailErreur] = useState(false);
  const [formulaireValide, setFormulaireValide] = useState(true);
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  const handleTelephoneChange = (e) => {
    const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
    const value = e.target.value;
    if (!phoneRegex.test(value)) {
      setTelephoneErreur(true);
      setFormulaireValide(false);
    } else {
      setTelephoneErreur(false);
      setFormulaireValide(!emailErreur); // Réinitialiser le statut du formulaire s'il n'y a pas d'erreur d'email
    }
    setTelephone(value);
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const value = e.target.value;
    if (!emailRegex.test(value)) {
      setEmailErreur(true);
      setFormulaireValide(false);
    } else {
      setEmailErreur(false);
      setFormulaireValide(!telephoneErreur); // Réinitialiser le statut du formulaire s'il n'y a pas d'erreur de téléphone
    }
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Réinitialisez d'abord les états d'erreur
    setTelephoneErreur(false);
    setEmailErreur(false);

    // Si les vérifications sont réussies, vous pouvez soumettre le formulaire
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

  const fermerFormulaire = () => {
    setAfficherFormulaire(false); // Ferme le formulaire directement
};



  const handleClickOverlay = () => {
    if (!demandeSoumise) {
        fermerFormulaire();
    }
};

  return (
    <>
        <div className='overlay' onClick={handleClickOverlay}>
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
                    onChange={handleEmailChange}
                    required
                    className={`input-field ${emailErreur ? 'input-error' : ''}`}
                  />
                </div>
                <div>
                  <label htmlFor="telephone">Téléphone<span className="required">*</span> :</label>
                  <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={handleTelephoneChange}
                    required
                    className={`input-field ${telephoneErreur ? 'input-error' : ''}`}
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
                <button type="submit" className='submit-devis' disabled={!formulaireValide}>Envoyer</button>
              </form>
            ) : (
              <div>
                <Confirmation />
              </div>
            )}
          </div>
        </div>
    </>
  );
}

export default ObtenirUnDevisForm;
