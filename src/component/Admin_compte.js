
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
