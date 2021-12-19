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
            {/* <Row>
                <Col xs={8}>
                    <div style={styles}>{title}</div>
                </Col>
                <Col xs={4}>
                    <Button variant="primary">
                        Precio <Badge bg="secondary">{price}</Badge>
                        <span className="visually-hidden">$</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <img className='img-product' alt='' src={image}></img>
                </Col>
            </Row> */}
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={image} className='img-product'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Añadir</Button>
                    <DescriptionModal title={title} description={description}/>
                </Card.Body>
            </Card>
        </Col>
    )
}