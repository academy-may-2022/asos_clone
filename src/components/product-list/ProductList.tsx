
import React, { useState, useEffect } from 'react';

import { ProductsAPI } from '../../api/products'

import { Product } from '../product/product';
import type { IProduct } from '../product/types';
import { Container } from './styles'

const productsAPI = new ProductsAPI()

export const ProductList = () => {
    const [products, setProducts] = useState<IProduct[] | []>([]);

    useEffect(() => {
        productsAPI.getProducts().then(setProducts);
    }, [])

    const mapProduct = (product: IProduct) => (
        <Product key={product.id} product={product} />
    )

    return (
        <Container>
            {products.map(mapProduct)}
        </Container>
    );
};
