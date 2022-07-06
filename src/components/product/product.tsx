import React from 'react';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import { Link } from 'react-router-dom'

import type { productProps } from './types'
import { CardContainer } from './styles'

export const Product = ({product}: productProps) => {
    return (
        <CardContainer>
            <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt="green iguana"
            />
            <CardContent>
            <Link to={`/product/${ product.id }`}><h4>{product.title}</h4></Link>
            <p>{product.description}</p>
            <p>{`${product.price}€`}</p>
            </CardContent>
        </CardContainer>
    )
}