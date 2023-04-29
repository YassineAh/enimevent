import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import logo from '../logo/logo-enim.png';

const Header_club = () => {
    return (
        <BrowserRouter>
            <Navbar style={{ background: "#B3B1C7" }} expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" style={{ marginLeft: '0px', marginRight: '30px' }}>
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={Link} to="/historique" style={{ marginRight: '30px' }}>
                                Achats
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile" style={{ marginRight: '30px' }}>
                                Profile
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/deconnexion" >
                                Déconnexion
                            </Nav.Link>
                        </Nav>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="Logo"
                                style={{ marginLeft: '60px' }}
                            />
                        </Navbar.Brand>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </BrowserRouter>
    );
};

export default Header_club;