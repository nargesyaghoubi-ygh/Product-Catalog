import { Link, useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../data/data";


export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = getProducts(id);
 
    if (!product) {
        return (
            <>
                <p>Product not found.</p>
                <Link className="btn btn-primary mt-auto rounded-pill" to="/products">Back to Products</Link>
            </>
        );
    }

    return (
        <div className="card shadow border-0 p-4">
            <h2 className="mb-3">{product.name}</h2>

            <p className="text-muted">{product.category}</p>

            <h4 className="text-primary mb-3">${product.price}</h4>

            <p className="mb-4">{product.description}</p>

            <button
                className="btn btn-outline-secondary rounded-pill"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>
        </div>
    );
}
