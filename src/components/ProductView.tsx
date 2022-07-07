import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadProductData } from "../api/ProductsData";
import { Product } from "./Product";
import { IProduct } from "./ProductList";

export interface IProductView {
	product: IProduct;
}

export const ProductView = () => {
	const [product, setProduct] = useState<IProduct>({
		brand: "",
		category: "",
		description: "",
		discountPercentage: 0,
		id: 0,
		images: [""],
		price: 0,
		rating: 0,
		stock: 0,
		thumbnail: "",
		title: "",
	});
	const { id } = useParams();

	useEffect(() => {
		loadProductData(id).then(setProduct);
	}, [id]);

	return (
		<div>
			<Product product={product} />
			{/* TODO: handle invalid id*/}
		</div>
	);
};
