import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    if (!token) {
        navigate("/login");
        return null;
    }

    const data = jwtDecode(token);

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (

        <div className="dashboard-container">

            <h1>ScholarHub Dashboard</h1>

            <div className="dashboard-card">

                <h2>Welcome 👋</h2>

                <h3>{data.sub}</h3>

                <p>
                    <strong>Role :</strong> {data.role}
                </p>

            </div>

            <div className="dashboard-menu">

                <Link to="/scholarships">
                    <button>🎓 View Scholarships</button>
                </Link>

                <Link to="/my-applications">
                    <button>📝 My Applications</button>
                </Link>

                {
                    data.role === "ADMIN" &&

                    <>
                        <Link to="/add-scholarship">
                            <button>➕ Add Scholarship</button>
                        </Link>

                        <Link to="/registered-users">
                            <button>👥 Registered Users</button>
                        </Link>
                    </>
                }

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

export default Dashboard;