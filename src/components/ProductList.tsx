import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import React, {useState, useEffect} from 'react';

// type cannot be extended, interface can be
interface Product {
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
}

export const ProductList = () => {
    // useState<Product[] | []> : We would have an array of products or an empty array
    const [products, setProducts] = useState<Product[] | []>([]);

    useEffect(() => {
        loadData().then(setProducts);
    }, [])


    const loadData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data: Product[] = (await response.json()).products;
        console.log("Log : ");
        console.log(data);
        return data;
    }


    return (
        <div className="status">
            { products.map(product => (
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
            ))}
        </div>
    );
};