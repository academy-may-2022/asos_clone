import React from 'react';
import { render, screen } from '@testing-library/react';
import {Product} from './Product';
import {IProduct} from "./ProductList";

test('it renders all the products', () => {

    render(<Product product={products} />);
    const linkElement = screen.getByText(/iPhone/i);
    expect(linkElement).toBeInTheDocument();
});

