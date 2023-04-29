import React, { useState } from 'react';

function Profil() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmerMotDePasse, setConfirmerMotDePasse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // insérer ici la logique pour envoyer les données du formulaire
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '100px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
        <label htmlFor="nom" style={{ flex: '1', marginRight: '8px', textAlign: 'right' }}>Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          style={{ flex: '2', padding: '4px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
        <label htmlFor="prenom" style={{ flex: '1', marginRight: '8px', textAlign: 'right' }}>Prénom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
          style={{ flex: '2', padding: '4px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
        <label htmlFor="email" style={{ flex: '1', marginRight: '8px', textAlign: 'right' }}>Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ flex: '2', padding: '4px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
        <label htmlFor="motDePasse" style={{ flex: '1', marginRight: '8px', textAlign: 'right' }}>Mot de passe :</label>
        <input
          type="password"
          id="motDePasse"
          value={motDePasse}
          onChange={(event) => setMotDePasse(event.target.value)}
          style={{ flex: '2', padding: '4px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
        <label htmlFor="confirmerMotDePasse" style={{ flex: '1', marginRight: '8px', textAlign: 'right' }}>Confirmer mot de passe :</label>
        <input
          type="password"
          id="confirmerMotDePasse"
          value={confirmerMotDePasse}
          onChange={(event) => setConfirmerMotDePasse(event.target.value)}
          style={{ flex: '2', padding: '4px' }}
        />
      </div>
      <button type="submit" style={{ alignSelf: 'flex-end'}}>Modifier</button>
</form>
);
}

export default Profil;
