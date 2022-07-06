import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import React from 'react';


export interface IProduct {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

type productProps = {product:IProduct}


export const Product = ({product}: productProps) => {

    return (

        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt="green iguana"
            />
            <CardContent>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{`${product.price}€`}</p>
            </CardContent>

        </Card>

    )
}