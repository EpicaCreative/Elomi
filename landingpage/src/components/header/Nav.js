import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                {/* menu da esquerda */} 
                </Nav>
                <Nav>
                <Nav.Link href="#quemsomos">Quem somos</Nav.Link>
                <Nav.Link href="#beneficios">Benefícios</Nav.Link>
                <Nav.Link href="#produtos">Nossos produtos</Nav.Link>
                <Nav.Link href="#ganhos">Ganhos</Nav.Link>
                <Nav.Link href="#depoimentos">Depoimentos</Nav.Link>
                <Nav.Link id="cadastrar" href="#cadastrar">Cadastrar</Nav.Link>
                   
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}