import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>
      <p className="text-secondary">Page not found</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}