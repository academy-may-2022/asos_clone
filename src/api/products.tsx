
import { IProduct } from '../components/product/types'

export class ProductsAPI {
    async getProducts () {
        const response = await fetch('https://dummyjson.com/products');
        const data: IProduct[] = (await response.json()).products;
        return data;
    }

    async getProduct (id: string) {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product: IProduct = await response.json();
        return product;
    }
}
