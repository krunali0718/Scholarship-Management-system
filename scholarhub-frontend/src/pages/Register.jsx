import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/RegisterApi";
import "../css/Register.css";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        college: "",
        course: "",
        cgpa: "",
        familyIncome: "",
        role: "STUDENT"
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await registerUser(user);

            alert(response.data);

            navigate("/login");

        } catch (error) {

            alert("Registration Failed");

            console.log(error);

        }
    }

    return (

        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>

                <h2>Student Registration</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="college"
                    placeholder="College Name"
                    value={user.college}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={user.course}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="cgpa"
                    placeholder="CGPA"
                    value={user.cgpa}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="familyIncome"
                    placeholder="Family Income"
                    value={user.familyIncome}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="btn btn-navy">
                    Register
                </button>

            </form>

        </div>

    );
}

export default Register;