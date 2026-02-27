import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div>
      <h1>Products</h1>
      <p>Browse our products</p>

      <Outlet />
    </div>
  );
}