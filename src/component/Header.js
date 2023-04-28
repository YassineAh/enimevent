import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import logo from '../logo/logo-enim.png';

const Header = () => {
    return (
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
    );
};

export default Header;
