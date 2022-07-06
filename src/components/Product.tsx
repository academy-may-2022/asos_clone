import React from "react";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import { IProduct } from "./ProductList";

interface Props {
	product: IProduct;
}

export const Product = ({ product }: Props) => {
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
	);
};
