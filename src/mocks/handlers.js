import { rest } from 'msw';

export const handlers = [
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ products: [{ id: 1, title: 'Product 1' }] })
    );
  }),
];
