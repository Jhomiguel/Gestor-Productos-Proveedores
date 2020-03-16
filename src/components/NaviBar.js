
import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';


class Navigation extends Component{
    render(){
        return(
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Gestor de Productos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="./Productos">Productos</Nav.Link>
                    <Nav.Link href="./Proveedores">Proveedores</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>  
        );
    }
}
export default Navigation;
