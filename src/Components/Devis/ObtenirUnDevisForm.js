import React, { useState } from 'react';
import './ObtenirUnDevisForm.css';
import './Confirmation';
import Confirmation from './Confirmation';

function ObtenirUnDevisForm() {
  // Utilisation du useState hook pour gérer les états des champs du formulaire
  const [demandeSoumise, setDemandeSoumise] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setDemandeSoumise(true);

    // Envoyer les données du formulaire à votre serveur ou effectuer toute autre action nécessaire ici
    console.log('Données du formulaire :', { nom, prenom, email, telephone, message });

    // Réinitialisation des champs du formulaire après la soumission si nécessaire
    setNom('');
    setPrenom('');
    setEmail('');
    setTelephone('');
    setMessage('');
  };

  return (
    <div className='overlay'>
      <div className='popup'>
      <h2>Obtenir un devis</h2>
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
        <Confirmation/>
      )}
    </div>
    </div>
    
  );
}

export default ObtenirUnDevisForm;
