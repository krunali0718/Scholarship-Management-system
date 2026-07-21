import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../css/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    let role = "";
    let name = "";

    if (token) {
        const data = jwtDecode(token);
        role = data.role;
        name = data.name || data.sub;
    }

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (

        <header className="navbar">

            <div className="navbar-inner container">

                <Link to="/" className="brand">
                    <span className="brand-seal">SH</span>
                    <span className="brand-name">ScholarHub</span>
                </Link>

                <nav className="nav-links">

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

                </nav>

                <div className="nav-right">

                    {
                        token ? (
                            <>
                                <span className="nav-user">
                                    <span className="nav-user-dot" />
                                    {name}
                                </span>

                                <button
                                    className="btn btn-outline-navy nav-btn"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="btn btn-outline-navy nav-btn">
                                        Login
                                    </button>
                                </Link>

                                <Link to="/register">
                                    <button className="btn btn-gold nav-btn">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )
                    }

                </div>

            </div>

        </header>

    );
}

export default Navbar;