import React, { useState, useEffect } from "react";
import { Product } from "./Product";

// type cannot be extended, interface can be
export interface IProduct {
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
	const [products, setProducts] = useState<IProduct[] | []>([]);

	useEffect(() => {
		loadData().then(setProducts);
	}, []);

	const loadData = async () => {
		const response = await fetch("https://dummyjson.com/products");
		const data: IProduct[] = (await response.json()).products;
		console.log("Log : ");
		console.log(data);
		return data;
	};

	return (
		<div>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
		</div>
	);
};
