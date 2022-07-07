import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";


test("it renders all the products", async() => {
	render(<ProductList />);
	const linkElement = await screen.findByText(/iPhone/i);
	expect(linkElement).toBeInTheDocument();
});
