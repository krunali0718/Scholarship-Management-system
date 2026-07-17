import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({ children, role }) {

    const token = localStorage.getItem("token");

    // User is not logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    try {

        const user = jwtDecode(token);

        // If a role is required, check it
        if (role && user.role !== role) {
            return <Navigate to="/dashboard" replace />;
        }

        return children;

    } catch (error) {

        localStorage.removeItem("token");

        return <Navigate to="/login" replace />;

    }

}

export default ProtectedRoute;
