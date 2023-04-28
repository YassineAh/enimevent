import React from 'react';
import './paiement.css';
import image from '../logo/creditcard.png';

function Paiement(){
    return(
    <div>
        <h1> Détail de paiement</h1><br/>
        <form  className="formulaire" method="post" action="./traitement.php" >
            
           
           
            <div>


                <label for="sexe" >Méthode de paiement </label><br/>
                <input type="radio" name="sexe" id="CB" value="CB"  />
                <label for="CB"> Carte bancaire</label>
                <img
                                src={image}
                                width="100"
                                height="60"
                                alt="Cartes"
                                style={{ marginLeft: '60px' }}
                            />

            </div><br/>


            <label for="champ_nom">Nom du porteur de la carte</label><br/>
            <input className="zone_saisie" type="text" name="champ_nom" id="champ_nom"  required/><br/><br/>
            <label for="champ_numero">Numero de carte de paiement</label><br/>
            <input  className="zone_saisie" type="number" name="champ_numero" id="champ_numero" required/><br/><br/>
            <label for="champ_dateexp">Date d'expiration</label><br/>
            <input className="zone_saisie" type="date" name="champ_dateexp" id="champ_dateexp"  required/><br/><br/>
            <label for="champ_code">Code de vérification</label><br/>
            <input className="zone_saisie" type="number" name="champ_code" id="champ_code"  required/><br/><br/>

           
            <p> J'ai lu et accepté les conditions générales d'utilisation</p>
            <label for="Oui">Oui </label>
            <input type="checkbox" name="case" id="Oui" value="Oui#" required/><br/>
            
            <br/>
            <input type= "submit" name="envoyer" id="bouton_envoi" value= "Valider le paiement" />


                 


        </form>




    </div>

    )





}
export default Paiement