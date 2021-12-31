import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import db from "../../app/db/db";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = () => {

    const [productsCart, setProductsCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        const total = productsCart?.reduce((totalPrice, currentProduct) => {
          return totalPrice + currentProduct.price
        },0)
        setTotalPrice(total)
      }

    useLiveQuery( async () => {
        const productsDB = await db.cart.toArray();
        setProductsCart(productsDB);
    }, [])

    useEffect(() => {
        if(productsCart.length > 0) {
            getTotalPrice()
        }
    }, [productsCart])

    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title={`Carrito (${productsCart.length})`} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Total: ${totalPrice}</NavDropdown.Item>

                        {productsCart?.map((product) => {
                            return <ShoppingCartItem key={product.id} item={product} />
                            
                        })}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}