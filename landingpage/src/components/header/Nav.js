import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Navegador extends React.Component {
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Navbar.Brand href="#home"><picture>
                    <source media="(max-width: 768px)" srcSet="/img/logomarcaS.png"/>
                    <source media="(max-width: 768px)" srcSet="/img/logomarcaL.png"/>
                    <img src="/img/logomarcaL.png" alt="Logo da Elomi Cosméticos"/>
                </picture></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}