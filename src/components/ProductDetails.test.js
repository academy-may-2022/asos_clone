import {render} from "@testing-library/react";
import {ProductDetails} from "./ProductDetails";

test('retrieves product 1', async () => {
    render(
        <ProductDetails />
    );
})