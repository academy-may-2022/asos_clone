import { rest } from 'msw'

export const handlers = [
    rest.get(
        'https://dummyjson.com/products/1',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(product1)
            )
        }
    )
]

let product1 = {
    "id": 1,
    "title": "iStone 7",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Stone",
    "category": "smartphones",
    "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    "images": [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]
}