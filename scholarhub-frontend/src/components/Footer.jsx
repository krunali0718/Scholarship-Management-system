import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {

    return (

        <footer className="site-footer">

            <div className="container footer-grid">

                <div className="footer-brand">

                    <div className="brand">
                        <span className="brand-seal">SH</span>
                        <span className="brand-name">ScholarHub</span>
                    </div>

                    <p>
                        A Scholarship Management System that helps students
                        discover scholarships, apply online, and track their
                        applications easily.
                    </p>

                </div>

                <div className="footer-col">
                    <h4>Platform</h4>
                    <Link to="/">Home</Link>
                    <Link to="/scholarships">Scholarships</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>

                <div className="footer-col">
                    <h4>For Students</h4>
                    <Link to="/my-applications">My Applications</Link>
                    <Link to="/scholarships">Browse Opportunities</Link>
                </div>

                <div className="footer-col">
                    <h4>For Admins</h4>
                    <Link to="/admin-dashboard">Dashboard</Link>
                    <Link to="/add-scholarship">Add Scholarship</Link>
                    <Link to="/registered-users">Registered Users</Link>
                </div>

            </div>

            <div className="footer-bottom">

                <div className="container footer-bottom-inner">

                    <p>
                        © 2026 ScholarHub. All Rights Reserved.
                    </p>

                    <p>
                        Developed by Krunali
                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;