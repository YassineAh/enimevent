import React from 'react';
import './achats.css';
import logo from '../logo/logo-enim.png';

function Achats(){




    return(

     <div >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
            <div className="main_menu">
                <ul className="menu_admin" id="menu_admin">
                    <li className="element_menu" id="elem_accueil">  
                        <a href="" >             
                            <i class="fa fa-home"> </i>
                            Acceuil
                        </a>
                        
                    </li>
                    <li className="element_menu" id="elem_achats">  
                        <a href="" >             
                             
                            <i class="fa fa-clock-o"> </i>
                            Achats
                        </a>
                    </li>
                    <li className="element_menu" id="elem_comptes">  
                        <a href="" >             
                             
                            <i class="fa fa-user-circle-o"> </i>
                            Comptes Clubs
                        </a>
                    </li>
                    <li className="element_menu" id="signout">  
                        <a href="" >             
                            <i class="fa fa-sign-out"> </i>
                            Déconnexion
                        </a>
                    </li>
                    <img src={logo}  alt="logo"  width="80px" height="70px"/> 

                        
                    
                    
                </ul>
            </div>
        <br/><br/>
        <table align="center" cellSpacing="3" cellPadding={5} bgcolor="#E9E9E9" border={1 } height="900" width={900}>
            <thead>
                <tr>
                    <th  id="col_client"> Id Client</th>
                    <th id="col_achat"> Id Achat</th>
                    <th id="col_produit"> Id Produit</th>
                    <th id="col_image"> Image </th>
                    <th id="col_descr"> Description</th>
                    <th id="col_ventes"> Quantité vendue</th>
                    <th id="col_prix"> Prix total</th>
    
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>id</td>
                    <td>id</td>
                    <td>img</td>
                    <td>descp</td>
                    <td>qt</td>
                    <td>prix</td>
                </tr>

            </tbody>
            




        </table>
        
        


    </div>






    )
    










}
export default Achats