import React from "react";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = () => {

    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Carrito" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Vaciar carrito</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Comprar carrito</NavDropdown.Item>

                        <ShoppingCartItem/>
                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}