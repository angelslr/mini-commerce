import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import '../assets/css/styles.css'
import { DescriptionModal } from "./DescriptionModal";
import { Rating } from "./Rating";
import db from "../app/db/db";

const styles = {
    fontSize: '15px',
    color: 'red'
}

export const Product = ({ item }) => {

    const { title, image, price, description, rating } = item;

    const addProductToCart = (title, price, category) => {
        db.cart.add({
            title: title,
            price: price,
            category: category
        })
    }

    return (
        <Col xs={4}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={image} className='img-product' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Precio: ${price}
                    </Card.Text>
                    <Card.Text>
                        Rating: <Rating rating={rating} />
                    </Card.Text>
                    <DescriptionModal title={title} description={description} />
                    <Button className="mt-2" variant='primary' onClick={() => addProductToCart(item)}>Añadir al carrito</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}