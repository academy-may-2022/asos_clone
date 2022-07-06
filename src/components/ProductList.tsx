import React, {useState, useEffect} from 'react';
import {IProduct} from "../models/Product";
import {Product} from "./Product"

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
        <div>

            <div className="status">{ products.map(product => (
                /*This is a React component created by React
                See also React.Fragment*/
                <Product key={product.id} product={product}/>


                )
                )}</div>

        </div>

    );
};