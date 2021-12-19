import React from "react";
import { Row } from "react-bootstrap";
import json from '../examples/products.json';
import { Product } from "./Product";

export const ListProducts = () => {

    const products = json.products;

    /*const recorrer = (array) => {
        const list = [];
        for (let i = 0; array.length > i; i++) {
            const element = <div key={i}>{array[i].title}</div>
            list.push(element);
        }
        return list;
    }*/

    return (
        <Row>
            {products.map((product, index) => (
               <Product key={index} item={product}/>
            ))
            }
        </Row>
    )
}