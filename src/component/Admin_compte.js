
import React, { useState } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';

import logo from '../logo/logo-enim.png';




function Admin_compte() {

  
  

  const [productData, setProductData] = useState([
    { id: 1, image: 'image1', description: 'description1', price1: 10, price2: 20 },
    { id: 2, image: 'image2', description: 'description2', price1: 30, price2: 40 },
  ]);

  const handleInputChange = (event, index, field) => {
    const newValue = event.target.value;
    setProductData(prevData => {
      
      const newData = [...prevData];
      newData[index][field] = newValue;
      return newData;
    });
  }



  return (
    <div>

      <Navbar   bg="light" expand="lg" >
        
        <Nav style={{justifyContent: "space-evenly",position:"absolute",width:"1223px",height: "50px",left: "0px",top: "-4px",background:"#B3B1C7", }}className="Nav">
          <Nav.Link style={{marginRight: "100px"}}href="#home"  >Accueil</Nav.Link> 

          <Nav.Link style={{marginRight: "100px"}}href="#home"  >Accueil</Nav.Link>
          <Nav.Link style={{marginRight: "600px"}} href="#profile" >Profile</Nav.Link> 
          <Nav.Link href="#deconnexion" >Déconnexion</Nav.Link>
          <Navbar.Brand>
            <img
              src={logo}
             width="45"
            height="45"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ marginLeft: '60px',background:"#B3B1C7" }}
            
           
          />
          </Navbar.Brand>
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
      <Navbar>
        <Nav>
          <Nav.Link style={{marginRight: "650px"}} href="#profile" >Profile</Nav.Link> 
          <Nav.Link href="#deconnexion" >Déconnexion</Nav.Link>
        </Nav>
      </Navbar>


      <Table striped bordered hover style={{position: "absolute",top: "159px"}}className="table">
        <thead>
          <tr>
            <th>Id-produit</th>
            <th>Image</th>
            <th>Description</th>
            <th>Prix en interne</th>
            <th>Prix externe</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><input type="text" value={product.image} onChange={event => handleInputChange(event, index, 'image')} /></td>
              <td><input type="text" value={product.description} onChange={event => handleInputChange(event, index, 'description')} /></td>
              <td><input type="text" value={product.price1} onChange={event => handleInputChange(event, index, 'price1')} /></td>
              <td><input type="text" value={product.price2} onChange={event => handleInputChange(event, index, 'price2')} /></td>
            </tr>
          ))}
        </tbody>
      </Table>

    
      <div style={{position: "absolute", top:"525px", left: "80%", transform: "translateX(-50%)"}}>
        <button style={{marginRight: "10px", color: "#030AB3", backgroundColor: "#D9D9D9", border: "none"}}>Ajouter</button>
        <button style={{marginRight: "10px", color: "#030AB3", backgroundColor: "#D9D9D9", border: "none"}}>Modifier</button>
        <button style={{color: "#FF0000", backgroundColor: "#D9D9D9", border: "none"}}>Supprimer</button>
      </div> 
    </div>
    
  );
}

export default Admin_compte;
