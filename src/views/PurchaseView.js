import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCart/DetailCart";

export const PurchaseView = ({history}) => {
    
    const handleCancelButton = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>Carrito de compras</h1>
            <DetailCart />
            <Row>
                <Col xs={6}>
                    <Button onClick={handleCancelButton} variant='danger'>Cancelar</Button>
                </Col>
                <Col xs={6}>
                    <Button variant='success'>Cancelar</Button>
                </Col>
            </Row>
        </div>
    )
}