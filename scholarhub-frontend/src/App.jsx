import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import AddScholarship from "./pages/AddScholarship";
import MyApplications from "./pages/MyApplications";
import RegisteredUsers from "./pages/RegisteredUsers";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Student & Admin */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Scholarship */}

                <Route
                    path="/scholarships"
                    element={
                        <ProtectedRoute>
                            <Scholarships />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/scholarship/:id"
                    element={
                        <ProtectedRoute>
                            <ScholarshipDetails />
                        </ProtectedRoute>
                    }
                />

                {/* Student */}

                <Route
                    path="/my-applications"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <MyApplications />
                        </ProtectedRoute>
                    }
                />

                {/* Admin */}

                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/add-scholarship"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AddScholarship />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/registered-users"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <RegisteredUsers />
                        </ProtectedRoute>
                    }
                />

            </Routes>

            <Footer />

        </BrowserRouter>

    );

}

export default App;