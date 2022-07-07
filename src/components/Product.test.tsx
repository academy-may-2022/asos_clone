import React from 'react';
import { render, screen } from '@testing-library/react';
import {Product} from './Product';
import {IProduct} from "./ProductList";



test('it renders a single the products', () => {
    const mockProduct:IProduct = {
        id: 1,
        title: "iPhone",
        brand: "Apple",
        description: "Test",
        category: "Test",
        discountPercentage: 0,
        images: [],
        price: 0,
        rating: 0,
        stock: 0,
        thumbnail: ""
    }
    render(<Product product={mockProduct} />);
    const linkElement = screen.getByText(/iPhone/i);
    expect(linkElement).toBeInTheDocument();
});

