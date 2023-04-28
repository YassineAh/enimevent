
import React, { useState } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';



function Admin_accueil() {
  
  


  return (
    <div>

      


      <div className="container">
      <Table striped bordered hover style={{position: "absolute",top: "159px",left: "0px" }}className="table">
        <thead>
          <tr>
            <th>Id-produit</th>
            <th>Image</th>
            <th>Description</th>
            <th>Prix Enimiste</th>
            <th>Prix Externe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Image1</td>
            <td>Description1</td>
            <td>Prix1</td>
            <td>Prix2</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Image2</td>
            <td>Description2</td>
            <td>Prix3</td>
            <td>Prix4</td>
          </tr>
        </tbody>
      </Table>
    </div>
    
     
    </div>
    
  );
  }

export default Admin_accueil;
