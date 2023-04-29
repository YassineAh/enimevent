
import React, { useState } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';



function Achats() {
  
  


  return (
    <div>

      


      <div className="container">
      <Table striped bordered hover style={{position: "absolute",top: "159px",left: "0px" }}className="table">
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
            <td>1</td>
            <td>10</td>
            <td>15</td>
            <td>image1</td>
            
            <td>description1</td>
            <td>quantite vendu1</td>
            <td>Prix total1</td>
          </tr>
          <tr>
          <td>2</td>
            <td>11</td>
            <td>16</td>
            <td>image2</td>
            
            <td>description2</td>
            <td>quantite vendu2</td>
            <td>Prix total2</td>
          </tr>
        </tbody> 
      </Table>
    </div>
    
     
    </div>
    
  );
  }

export default Achats;
