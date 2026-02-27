import { Link, NavLink, useNavigate } from "react-router-dom"

export default function Navbar({ isAuth, onLogout }) {
    const navigate = useNavigate();

    function handleLogout() {
        onLogout();
        navigate("/", { replace: true });
    }


    const linkClass = ({ isActive }) =>
        "nav-link" + (isActive ? "fw-bold text-primary" : "")

    return (
        <nav className="navbar navbar-expand-lg sticky-top glass border-bottom">
            <div className="container py-2">
                <Link className="navbar-brand fw-bold" to="/">
                    <span className="text-gradient">Product </span>Catalog

                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                    aria-controls="nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                        <li className="nav-item">
                            <NavLink className={linkClass} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={linkClass} to="/products">
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={linkClass} to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>

                        <li className="nav-item ms-lg-2">
                            {isAuth ? (
                                <button
                                    className="btn btn-outline-primary rounded-pill px-3"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link className="btn btn-primary rounded-pill px-3" to="/login">
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}