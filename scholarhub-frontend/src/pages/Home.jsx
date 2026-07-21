import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllScholarships } from "../service/ScholarshipApi";
import "../css/Home.css";

const STEPS = [
    {
        title: "Create your profile",
        copy: "Register with your academic and financial details once — every application reuses them."
    },
    {
        title: "Find your match",
        copy: "Browse scholarships filtered by eligibility, category, and award amount."
    },
    {
        title: "Apply & track",
        copy: "Submit online in minutes, then follow your status from your dashboard."
    }
];

const FEATURES = [
    {
        title: "Curated opportunities",
        copy: "Every scholarship on ScholarHub is reviewed before it goes live — no dead links, no expired listings."
    },
    {
        title: "One application profile",
        copy: "Your academic record and income details are saved once and reused across applications."
    },
    {
        title: "Real-time status",
        copy: "Know the moment your application is reviewed, approved, or needs attention."
    },
    {
        title: "Secure by design",
        copy: "JWT-based authentication and role-based access keep student data locked down."
    }
];

function Home() {

    const [scholarships, setScholarships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadScholarships();
    }, []);

    async function loadScholarships() {

        try {

            const response = await getAllScholarships();
            setScholarships(response.data || []);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    }

    const featured = scholarships.slice(0, 4);

    return (

        <div className="home">

            {/* ---------- Hero ---------- */}
            <section className="hero">

                <div className="container hero-inner">

                    <div className="hero-copy">

                        <span className="eyebrow eyebrow-light">
                            <span className="eyebrow-dot" />
                            Scholarship Management, simplified
                        </span>

                        <h1>
                            Every scholarship you
                            <br />
                            qualify for, in one place.
                        </h1>

                        <p className="hero-sub">
                            ScholarHub brings together verified scholarships,
                            a single application profile, and live status
                            tracking — so finding funding for your education
                            takes minutes, not months.
                        </p>

                        <div className="hero-actions">

                            <Link to="/register">
                                <button className="btn btn-gold">
                                    Get started free
                                </button>
                            </Link>

                            <Link to="/scholarships">
                                <button className="btn btn-outline">
                                    Browse scholarships
                                </button>
                            </Link>

                        </div>

                    </div>

                    <div className="hero-stat-card">

                        <div className="hero-stat-card-seal">🎓</div>

                        <div className="hero-stat-row">
                            <span className="hero-stat-number">
                                {loading ? "—" : scholarships.length}
                            </span>
                            <span className="hero-stat-label">
                                live scholarships<br />open for application
                            </span>
                        </div>

                        <hr />

                        <div className="hero-stat-row">
                            <span className="hero-stat-number">1</span>
                            <span className="hero-stat-label">
                                profile — reused for<br />every application
                            </span>
                        </div>

                    </div>

                </div>

            </section>

            {/* ---------- How it works ---------- */}
            <section className="section steps-section">

                <div className="container">

                    <span className="eyebrow">How it works</span>
                    <h2 className="section-title">
                        Three steps to your next award
                    </h2>

                    <div className="steps-grid">

                        {
                            STEPS.map((step, index) => (

                                <div className="step-card" key={step.title}>

                                    <div className="seal step-seal">
                                        {index + 1}
                                    </div>

                                    <h3>{step.title}</h3>
                                    <p>{step.copy}</p>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </section>

            {/* ---------- Featured scholarships ---------- */}
            <section className="section featured-section">

                <div className="container">

                    <div className="section-head">

                        <div>
                            <span className="eyebrow">Live right now</span>
                            <h2 className="section-title">
                                Featured scholarships
                            </h2>
                        </div>

                        <Link to="/scholarships" className="view-all-link">
                            View all →
                        </Link>

                    </div>

                    {
                        loading ? (

                            <p className="muted-note">
                                Loading scholarships…
                            </p>

                        ) : featured.length === 0 ? (

                            <div className="empty-note">
                                <p>
                                    No scholarships are live yet — check back
                                    soon, or ask an admin to add one.
                                </p>
                            </div>

                        ) : (

                            <div className="featured-grid">

                                {
                                    featured.map((s) => (

                                        <Link
                                            to={`/scholarship/${s.id}`}
                                            className="ticket-card"
                                            key={s.id}
                                        >

                                            <div className="ticket-notch ticket-notch-left" />
                                            <div className="ticket-notch ticket-notch-right" />

                                            <span className="ticket-category">
                                                {s.category || "General"}
                                            </span>

                                            <h3 className="ticket-title">
                                                {s.title}
                                            </h3>

                                            <div className="ticket-divider" />

                                            <div className="ticket-row">
                                                <span className="ticket-amount">
                                                    ₹{Number(s.amount).toLocaleString("en-IN")}
                                                </span>

                                                <span className="ticket-deadline">
                                                    Due {s.lastDate}
                                                </span>
                                            </div>

                                        </Link>

                                    ))
                                }

                            </div>

                        )
                    }

                </div>

            </section>

            {/* ---------- Why ScholarHub ---------- */}
            <section className="section features-section">

                <div className="container">

                    <span className="eyebrow">Why ScholarHub</span>
                    <h2 className="section-title">
                        Built to remove the friction
                    </h2>

                    <div className="feature-grid">

                        {
                            FEATURES.map((f) => (

                                <div className="feature-card" key={f.title}>
                                    <h3>{f.title}</h3>
                                    <p>{f.copy}</p>
                                </div>

                            ))
                        }

                    </div>

                </div>

            </section>

            {/* ---------- CTA banner ---------- */}
            <section className="cta-banner">

                <div className="container cta-banner-inner">

                    <div>
                        <h2>Ready to find your scholarship?</h2>
                        <p>
                            Create your free profile and start applying today.
                        </p>
                    </div>

                    <Link to="/register">
                        <button className="btn btn-gold">
                            Register now
                        </button>
                    </Link>

                </div>

            </section>

        </div>

    );
}

export default Home;
