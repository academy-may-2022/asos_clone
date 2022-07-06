import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import {IProduct} from '../models/Product';
import {Link} from "react-router-dom";

interface Props {
    product: IProduct;
}

export const Product = ({product}: Props) => {
    return <Link to={`/products/${product.id}`}>
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt="green iguana"
            />
            <CardContent>
                <p>{product.title}</p>
                <p>{product.description}</p>
                {/*String interpolation */}
                {/*String literal*/ }
                <p>{`${product.price}€`}</p>
            </CardContent>
        </Card>
    </Link>
}