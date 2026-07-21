import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
    getAllScholarships,
    deleteScholarship
} from "../service/ScholarshipApi";
import ScholarshipCard from "../components/ScholarshipCard";
import "../css/Scholarship.css";

function Scholarships() {

    const [scholarships, setScholarships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const token = localStorage.getItem("token");
    const role = token ? jwtDecode(token).role : null;

    useEffect(() => {
        loadScholarships();
    }, []);

    async function loadScholarships() {

        setLoading(true);

        try {

            const response = await getAllScholarships();
            setScholarships(response.data || []);

        } catch (error) {

            console.log(error);
            alert("Unable to load scholarships.");

        } finally {

            setLoading(false);

        }
    }

    async function removeScholarship(id) {

        if (!window.confirm("Delete this scholarship? This cannot be undone.")) {
            return;
        }

        try {

            await deleteScholarship(id);

            alert("Scholarship Deleted Successfully");

            loadScholarships();

        } catch (error) {

            console.log(error);

            alert("Unable to delete scholarship");

        }

    }

    const filtered = scholarships.filter((s) =>
        `${s.title} ${s.category} ${s.eligibility}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div className="scholarships-page">

            <div className="scholarships-hero">

                <div className="container">

                    <span className="eyebrow eyebrow-light">
                        <span className="eyebrow-dot" />
                        {scholarships.length} scholarships listed
                    </span>

                    <h1>Browse Scholarships</h1>

                    <p>
                        Search by title, category, or eligibility to find
                        the awards you qualify for.
                    </p>

                    <input
                        type="text"
                        className="scholarships-search"
                        placeholder="Search scholarships…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

            </div>

            <div className="container scholarships-body">

                {
                    role === "ADMIN" && (

                        <div className="admin-toolbar">

                            <Link to="/add-scholarship">
                                <button className="btn btn-gold">
                                    + Add Scholarship
                                </button>
                            </Link>

                        </div>

                    )
                }

                {
                    loading ? (

                        <p className="muted-note">Loading scholarships…</p>

                    ) : filtered.length === 0 ? (

                        <div className="empty-note">
                            <p>
                                No scholarships match your search right now.
                            </p>
                        </div>

                    ) : (

                        <div className="scholarship-grid">

                            {
                                filtered.map((scholarship) => (

                                    <ScholarshipCard
                                        key={scholarship.id}
                                        scholarship={scholarship}
                                        onDelete={
                                            role === "ADMIN"
                                                ? removeScholarship
                                                : undefined
                                        }
                                    />

                                ))
                            }

                        </div>

                    )
                }

            </div>

        </div>

    );

}

export default Scholarships;
