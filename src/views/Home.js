import React from "react";
import { Container } from 'react-bootstrap';
import { ListProducts } from '../components/ListProducts';

export const Home = () => (
    <Container>
        <div className="App">
            <ListProducts />
        </div>
    </Container>
)
