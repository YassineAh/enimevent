import React from 'react'
import { useState,useEffect } from 'react';
import {
    MDBContainer,
    MDBRow,
  } from "mdb-react-ui-kit";
  import Products from './Products';
  import './Interface_clients.css'
  

function InterfaceClients() {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
        <div className="products">
        <MDBContainer fluid className="my-5 text-center" id="comp">
          <h4 className="mt-4 mb-5">
            <strong>Produits</strong>
          </h4>

          <MDBRow id="row">
            
              {products.map((con) => (
                <Products
                  key={con.id}
                  img={con.image}
                  name={con.title}
                  category={con.category}
                  price={con.price}
                />
              ))}
            
          </MDBRow>
          
        </MDBContainer>
        <MDBContainer fluid className="my-5 text-center" id="comp">
          <h4 className="mt-4 mb-5">
            <strong>Evenements</strong>
          </h4>

          <MDBRow id="row">
            
              {products.map((con) => (
                <Products
                  key={con.id}
                  img={con.image}
                  name={con.title}
                  category={con.category}
                  price={con.price}
                />
              ))}
            
          </MDBRow>
          
        </MDBContainer>
      </div>
    </div>
  )
}

export default InterfaceClients