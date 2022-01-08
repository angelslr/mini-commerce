import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productsServices";
export const DetailCart = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
            .then((allProducts) => setProducts(allProducts))
    }, [])



    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((products, index) => (
                    <tr key={index}>
                        <td>{products.id}</td>
                        <td>{products.title}</td>
                        <td>{products.category}</td>
                        <td>{products.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}