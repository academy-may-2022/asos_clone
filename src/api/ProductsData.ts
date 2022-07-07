import { IProduct } from "../components/ProductList";

export const loadProductData = async (id: string | undefined) => {
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	const data: IProduct = await response.json();
	console.log("Log : ", data);
	return data;
};
