import db from "../db/db";

export const getProductById = async (id) => {
    const productFromDB = await db.cart.get(parseInt(id));
    return productFromDB;
}

export const getAllProducts = async () => {
    return await db.cart.toArray();
}