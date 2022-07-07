import { render, screen } from '@testing-library/react';
import { ProductList } from './ProductList';

it('logs data', async () => {
  render(<ProductList />);

  expect(await screen.findByText(/Product 1/i)).toBeInTheDocument();
});
