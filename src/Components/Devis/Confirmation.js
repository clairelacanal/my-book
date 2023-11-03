import React from 'react';
import './Confirmation.css';

function Confirmation() {
  return (
    <div className="container-confirmation">
      <div className='container-confirmation-icon'>
      <span className="confirmation-icon"></span>
      </div>
      <div className='container-paragraphe-confirmation'>
        <p>Merci de votre confiance.</p>
        <p>Votre demande sera traitée dans les plus brefs délais.</p>
      </div>
    </div>
  );
}

export default Confirmation;
