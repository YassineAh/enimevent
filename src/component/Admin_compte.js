
import React, { useState } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';



function Admin_compte() {
  
  }


  return (
    <div>

      <Navbar   bg="light" expand="lg" >
        
        <Nav style={{justifyContent: "space-evenly",position:"absolute",width:"1223px",height: "50px",left: "0px",top: "-4px",background:"#B3B1C7", }}className="Nav">
          <Nav.Link style={{marginRight: "100px"}}href="#home"  >Accueil</Nav.Link> 
          <Nav.Link style={{marginRight: "100px"}}href="#home"  >Accueil</Nav.Link>
          <Nav.Link style={{marginRight: "650px"}} href="#profile" >Profile</Nav.Link> 
          <Nav.Link href="#deconnexion" >Déconnexion</Nav.Link>
        </Nav>
      </Navbar>


      <div className="containerCompte">
        <Table striped bordered hover style={{position: "absolute",top: "159px"}}className="tableCompte">
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
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
          </tbody>
        </Table>
      </div>
    
      <div style={{position: "absolute", top:"525px", left: "80%", transform: "translateX(-50%)"}}>
        <button style={{marginRight: "10px", color: "#030AB3", backgroundColor: "#D9D9D9", border: "none"}}>Ajouter</button>
        <button style={{marginRight: "10px", color: "#030AB3", backgroundColor: "#D9D9D9", border: "none"}}>Modifier</button>
        <button style={{color: "#FF0000", backgroundColor: "#D9D9D9", border: "none"}}>Supprimer</button>
      </div> 
    </div>
    
  );
}

export default Admin_compte;
