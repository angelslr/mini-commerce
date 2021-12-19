import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import '../assets/css/styles.css'
import { DescriptionModal } from "./DescriptionModal";

const styles = {
    fontSize: '15px',
    color: 'red'
}

export const Product = ({ item }) => {

    const { title, image, price, description } = item;

    return (
        <Col xs={4}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={image} className='img-product'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Precio: ${price}
                    </Card.Text>
                    <DescriptionModal title={title} description={description}/>
                </Card.Body>
            </Card>
        </Col>
    )
}