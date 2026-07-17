import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../css/Dashboard.css";

function AdminDashboard() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    if (!token) {
        navigate("/login");
        return null;
    }

    const user = jwtDecode(token);

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (

        <div className="dashboard-container">

            <h1>Admin Dashboard</h1>

            <div className="dashboard-card">

                <h2>Welcome Admin 👋</h2>

                <h3>{user.sub}</h3>

                <p>
                    <strong>Role :</strong> {user.role}
                </p>

            </div>

            <div className="dashboard-menu">

                <Link to="/registered-users">
                    <button>
                        👥 Registered Users
                    </button>
                </Link>

                <Link to="/scholarships">
                    <button>
                        🎓 View Scholarships
                    </button>
                </Link>

                <Link to="/add-scholarship">
                    <button>
                        ➕ Add Scholarship
                    </button>
                </Link>

                <Link to="/applications">
                    <button>
                        📝 View Applications
                    </button>
                </Link>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    🚪 Logout
                </button>

            </div>

        </div>

    );

}

export default AdminDashboard;