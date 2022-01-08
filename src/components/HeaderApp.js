import React from "react";
import { Col, Row, Navbar, Container } from "react-bootstrap";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { Link } from 'react-router-dom';

export const HeaderApp = () => (
    <Row>
        <Col xs={12}>
            <Navbar bg="white">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>Mini Ecommerce</Navbar.Brand>
                    </Link>
                        <ShoppingCart />
                </Container>
            </Navbar>
        </Col>
    </Row>
)