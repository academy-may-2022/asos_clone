import {IProduct} from "../models/Product";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

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
    return <div>
        <h1>{product.title} (ID: {product.id})</h1>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.price}</p>
        <p>{product.rating}</p>
        <p>{product.stock}</p>
        <p>Images:</p>
        <p>{product.images}</p>
        <p>{product.thumbnail}</p>
    </div>
}