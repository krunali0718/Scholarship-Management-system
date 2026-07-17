import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../css/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    let role = "";
    let email = "";

    if (token) {
        const data = jwtDecode(token);
        role = data.role;
        email = data.sub;
    }

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (

        <nav className="navbar">

            <div className="logo">
                <Link to="/">
                    <h2>🎓 ScholarHub</h2>
                </Link>
            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/scholarships">
                    Scholarships
                </Link>

                {
                    token && role === "STUDENT" && (
                        <Link to="/my-applications">
                            My Applications
                        </Link>
                    )
                }

                {
                    token && role === "ADMIN" && (
                        <>
                            <Link to="/admin-dashboard">
                                Dashboard
                            </Link>

                            <Link to="/add-scholarship">
                                Add Scholarship
                            </Link>

                            <Link to="/registered-users">
                                Users
                            </Link>
                        </>
                    )
                }

            </div>

            <div className="nav-right">

                {
                    token ? (
                        <>

                            <span>{email}</span>

                            <button
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </>
                    ) : (

                        <>
                            <Link to="/login">
                                <button>
                                    Login
                                </button>
                            </Link>

                            <Link to="/register">
                                <button>
                                    Register
                                </button>
                            </Link>
                        </>

                    )
                }

            </div>

        </nav>

    );
}

export default Navbar;