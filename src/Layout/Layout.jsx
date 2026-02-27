import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
export default function Layout({ isAuth, onLogout }) {
    return (
        <div>
            <Navbar isAuth={isAuth} onLogout={onLogout} />
            <div className="container py-4">
                <Outlet />
            </div>
        </div>
    );
}