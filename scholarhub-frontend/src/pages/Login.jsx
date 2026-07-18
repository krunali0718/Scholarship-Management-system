import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/LoginApi";
import { jwtDecode } from "jwt-decode";
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
            const token = response.data.token;
            localStorage.setItem("token", token);

            // Decode role and redirect accordingly
            const decoded = jwtDecode(token);

            alert("Login Successful");

            if (decoded.role === "ADMIN") {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }

        } catch (error) {

            alert("Invalid Email or Password");

            console.log(error);

        }
    }

    return (

        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <h2>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={login.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={login.password}
                    onChange={handleChange}
                />


                <button type="submit">
                    Login
                </button>

            </form>

        </div>





    );
}

export default Login;