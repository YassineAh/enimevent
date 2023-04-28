
import React, { useState } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';



function Admin_accueil() {
  
  }


  return (
    <div>

      <Navbar   bg="light" expand="lg" >
        
        <Nav style={{justifyContent: "space-evenly",position:"absolute",width:"1223px",height: "50px",left: "0px",top: "-4px",background:"#B3B1C7", }}className="Nav">
          <Nav.Link style={{marginRight: "100px"}}href="#home"  >Accueil</Nav.Link> 
          <Nav.Link style={{marginRight: "650px"}} href="#profile" >Profile</Nav.Link> 
          <Nav.Link href="#deconnexion" >Déconnexion</Nav.Link>
        </Nav>
      </Navbar>


      <div className="container">
      <Table striped bordered hover style={{position: "absolute",top: "159px"}}className="table">
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


export default Admin_compte;
