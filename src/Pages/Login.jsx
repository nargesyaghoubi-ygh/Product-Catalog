import { useLocation, useNavigate } from "react-router-dom";

export default function Login({onLogin}){
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/dashboard";
    function handleLogin(){

        onLogin();
        navigate(from, {replace : true})

    }

    return(
        <div>
            <h1>Login</h1>
            <h3 className="text-secondary">
                Click here to simulate authentication.
            </h3>
            <button className="btn btn-info" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}