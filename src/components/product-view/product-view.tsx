
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IProduct } from '../product/types';
import { ProductsAPI } from '../../api/products';
import {
    CardContainer,
    Img,
    Information,
    Title,
    Description,
    Price
} from './styles';

const productsAPI = new ProductsAPI();

type routerParams = { productId: string };

export const ProductView = () => {
    const [ product, setProduct ] = useState<IProduct>();
    const params = useParams<routerParams>();
    const productId: string = params.productId || ''

    useEffect(() => {
        productsAPI.getProduct(productId).then(setProduct);
    }, [])

    return (
        <CardContainer>
            <Img src={product?.thumbnail}></Img>
            <Information>
                <Title>{product?.title}</Title>
                <Description>{product?.description}</Description>
                <Price>{product?.price} €</Price>
            </Information>
        </CardContainer>
    )
}