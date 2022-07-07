import { act, render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";
import { fakeProduct } from "../../mocks/fake-data"


test('retrieve products', async () => {
   await act(async() => {
        render(<ProductList />);
    });
    // await (new Promise((resolve) => { setTimeout(resolve, 3000) }))
    const linkElement = screen.getByText(fakeProduct.title);
    expect(linkElement).toBeInTheDocument();
})