import { Products } from "../data/data"
import { Link } from "react-router-dom"
export default function Product() {
    return (
        <div className="row g-4">
            {Products.map((p) => (
                <div key={p.id} className="col-md-4">
                    <div className="card h-100 shadow-sm border border-secondary product-card">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="text-muted mb-2">{p.category}</p>
                            <h6 className="fw-bold mb-3">${p.price}</h6>

                            <Link
                                to={`/products/${p.id}`}
                                className="btn btn-primary mt-auto rounded-pill"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}