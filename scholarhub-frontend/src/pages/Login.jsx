import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../service/LoginApi";
import "../css/Login.css";

function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setLogin((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await loginUser(login);

            // Save JWT Token
            localStorage.setItem("token", response.data.token);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Email or Password");

            console.log(error);

        }
    }

    return (

    <div className="login-container">

        <form className="login-form" onSubmit={handleSubmit}>

            <h2>Welcome back</h2>

            <p>Log in to manage your scholarships</p>

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
            />

            <button type="submit" className="btn btn-navy">
                Login
            </button>

            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>

        </form>

    </div>



   

    );
}

export default Login;