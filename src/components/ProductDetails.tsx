import {IProduct} from "../models/Product";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Grid, ImageList, ImageListItem, Paper} from "@mui/material";

export const ProductDetails = () => {
    let [product, setProduct] = useState<IProduct | null>(null);

    let { id } = useParams();

    const getProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        return await response.json();
    }

    useEffect(() => {
        getProduct().then(product => {
            setProduct(product);
        });
    }, []);

    if (!product) {
        return <h1>Loading...</h1>;
    }

    /*
        brand: string;
        category: string;
        description: string;
        discountPercentage: number;
        id: number;
        // Alternative way: Array<string>
        images: string[];
        price: number;
        rating: number;
        stock: number;
        thumbnail: string;
        title: string;
     */
    return <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{backgroundColor: "lightgrey"}}
            >
                <Grid item xs={2}></Grid>
                <Grid item xs={8} p={5} style={{backgroundColor: "white"}}>
                    <Link to="/products">Go back</Link>
                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {product.images.map((image) => (
                            <ImageListItem key={image}>
                                <img
                                    src={`${image}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <hr />
                    <h1>{product.title} (ID: {product.id})</h1>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p><b>Discount</b>: {product.discountPercentage}%</p>
                    <p><b>Price</b>: {product.price}€</p>
                    <p><b>Rating</b>: {product.rating}</p>
                    <p><b>Availability</b>: {product.stock} units</p>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
}