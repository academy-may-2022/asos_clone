import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";
import { fakeProduct } from "../../mocks/fake-data"
import { BrowserRouter } from "react-router-dom";

test('retrieve products', async () => {
    render(<BrowserRouter><ProductList /></BrowserRouter>);
    const linkElement = await screen.findByText(fakeProduct.title);
    expect(linkElement).toBeInTheDocument();
})