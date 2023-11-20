import React, { useState } from 'react';
import './ObtenirUnDevisForm.css';
import Confirmation from './Confirmation'; // Assurez-vous que le chemin d'importation est correct

function ObtenirUnDevisForm(props) {
  const [demandeSoumise, setDemandeSoumise] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [telephoneErreur, setTelephoneErreur] = useState(false);
  const [emailErreur, setEmailErreur] = useState(false);
  const [formulaireValide, setFormulaireValide] = useState(true);

  const handleTelephoneChange = (e) => {
    const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
    const value = e.target.value;
    setTelephone(value);
    setTelephoneErreur(!phoneRegex.test(value));
    setFormulaireValide(phoneRegex.test(value) && !emailErreur);
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const value = e.target.value;
    setEmail(value);
    setEmailErreur(!emailRegex.test(value));
    setFormulaireValide(emailRegex.test(value) && !telephoneErreur);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formulaireValide) {
      setDemandeSoumise(true);
      console.log('Formulaire soumis :', { nom, prenom, email, telephone, message });
      // Ici, vous traiteriez les données du formulaire, par exemple, en les envoyant à un serveur
    }
  };

  const fermerFormulaire = () => {
    props.fermerPopup();
  };

  return (
    <div className='overlay' onClick={fermerFormulaire}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <button onClick={fermerFormulaire} className="close-button">✖</button>
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
                onChange={(e) => setMessage(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <button type="submit" className='submit-devis' disabled={!formulaireValide}>Envoyer</button>
          </form>
        ) : (
          <Confirmation />
        )}
      </div>
    </div>
  );
}

export default ObtenirUnDevisForm;
