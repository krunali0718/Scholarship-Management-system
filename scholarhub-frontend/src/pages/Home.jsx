import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {

    return (

        <div className="home-container">

            <section className="hero">

                <h1>🎓 Welcome to ScholarHub</h1>

                <p>
                    Discover scholarships, apply online, and track your
                    applications with ease.
                </p>

                <div className="hero-buttons">

                    <Link to="/register">
                        <button className="register-btn">
                            Register
                        </button>
                    </Link>

                    <Link to="/login">
                        <button className="login-btn">
                            Login
                        </button>
                    </Link>

                </div>

            </section>

            <section className="features">

                <h2>Why Choose ScholarHub?</h2>

                <div className="feature-cards">

                    <div className="card">
                        <h3>🎯 Easy Scholarship Search</h3>
                        <p>
                            Browse scholarships based on eligibility,
                            category and amount.
                        </p>
                    </div>

                    <div className="card">
                        <h3>📝 Online Applications</h3>
                        <p>
                            Apply for scholarships online without
                            paperwork.
                        </p>
                    </div>

                    <div className="card">
                        <h3>📊 Track Applications</h3>
                        <p>
                            Check application status anytime from
                            your dashboard.
                        </p>
                    </div>

                    <div className="card">
                        <h3>🔒 Secure Login</h3>
                        <p>
                            JWT-based authentication keeps your
                            account safe.
                        </p>
                    </div>

                </div>

            </section>

            <section className="about">

                <h2>About ScholarHub</h2>

                <p>
                    ScholarHub is an online Scholarship Management System
                    developed to help students discover scholarships,
                    apply online, and track their applications.
                    Administrators can manage scholarships and review
                    student applications efficiently.
                </p>

            </section>

        </div>

    );
}

export default Home;