import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


class Navigation extends Component{
    render(){
        return(
            <div>
            <Navbar bg="dark" expand ="lg"/>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                    to="/Productos">Productos</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                    to="/Proveedores">Proovedores</NavLink>
                </Nav>
            </Navbar.Collapse>
          </div>  
        );
    }
}
export default Navigation;
