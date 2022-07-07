import {render, screen} from "@testing-library/react";
import {ProductDetails} from "./ProductDetails";
import {Route, Routes} from "react-router-dom";
import {MemoryRouter} from "react-router";

test('retrieves product 1', async () => {

    render(
        <MemoryRouter initialEntries={['/products/1']}>
            <Routes>
                <Route
                    exact
                    path="/products/:id"
                    component={() => (
                        <ProductDetails />
                    )}
                />
            </Routes>
        </MemoryRouter>
    );
})