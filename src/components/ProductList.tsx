import React, {useState, useEffect} from 'react';
import {IProduct} from "../models/Product";
import {Product} from "./Product"
import {Grid} from "@mui/material";

export const ProductList = () => {
    // useState<Product[] | []> : We would have an array of products or an empty array
    const [products, setProducts] = useState<IProduct[] | []>([]);

    useEffect(() => {
        loadData().then(setProducts);
    }, [])


    const loadData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data: IProduct[] = (await response.json()).products;
        console.log("Log : ");
        console.log(data);
        return data;
    }


    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{backgroundColor: "lightgrey"}}
        >
            <Grid item xs={2}></Grid>
            <Grid item xs={8} p={5} style={{backgroundColor: "white"}} direction="row">
                { products.map(product => (

                    <Grid item>
                        <Product key={product.id} product={product}/>
                    </Grid>
                    )
                )}
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
};