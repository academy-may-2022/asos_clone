
import React, { useState, useEffect } from 'react';
import { Product } from '../product/product';
import type{ IProduct } from '../product/product';



export const ProductList = () => {
    const [products, setProducts] = useState<IProduct[] | []>([]);

    useEffect(() => {
        loadData().then(setProducts);
    }, [])


    const loadData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data: IProduct[] = (await response.json()).products;
        return data;
    }

    const mapProduct = (product: IProduct) => (
        <Product key={product.id} product={product} />
    )


    return (
        <div className="status">{products.map(mapProduct)}</div>
    );
};