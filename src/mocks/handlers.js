import { rest } from 'msw'
import { fakeProduct } from './fake-data'

export const handlers = [
    rest.get('https://dummyjson.com/products', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                products: [fakeProduct]
            })
        )
    }),

    rest.get('https://dummyjson.com/products/:id', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({...fakeProduct, id: req.params.id })
        )
    })
]