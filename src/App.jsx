import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import ProductLayout from './Layout/ProductLayout';
import NotFound from './Pages/NotFound';

const LS_AUTH = "mb_auth";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const raw = localStorage.getItem(LS_AUTH);
        if (raw) {
            const parsed = JSON.parse(raw);
            setIsAuth(true);
            setUser(parsed.user);
        }
    }, []);

    function onLogin(userInfo) {
        const data = { user: userInfo, at: Date.now() };
        localStorage.setItem(LS_AUTH, JSON.stringify(data));
        setIsAuth(true);
        setUser(userInfo);
    }

    function onLogout() {
        localStorage.removeItem(LS_AUTH);
        setIsAuth(false);
        setUser(null);
    }

    return (
        <Routes>
            <Route element={<Layout isAuth={isAuth} onLogout={onLogout} />} >
                <Route path='/' element={<Home />} />
                <Route path="/products" element={<ProductLayout />}>
                    <Route index element={<Products />} />
                    <Route path=":id" element={<ProductDetails />} />
                </Route>
                <Route path='/login' element={<Login onLogin={onLogin} />} />

                <Route
                    path='/dashboard'
                    element={
                        <ProtectedRoute isAuth={isAuth}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    )
}

export default App
