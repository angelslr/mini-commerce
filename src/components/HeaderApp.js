import React from "react";
import { Col, Row, Navbar, Container } from "react-bootstrap";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const HeaderApp = () => (
    <Row>
        <Col xs={12}>
            <Navbar bg="white">
                <Container>
                    <Navbar.Brand href="#home">Mini Ecommerce</Navbar.Brand>
                    <ShoppingCart />
                </Container>
            </Navbar>
        </Col>
    </Row>
)