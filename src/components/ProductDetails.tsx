import {useParams} from "react-router-dom";

export const ProductDetails = () => {
    let { id } = useParams();
    return <h1>Product {id}</h1>
}