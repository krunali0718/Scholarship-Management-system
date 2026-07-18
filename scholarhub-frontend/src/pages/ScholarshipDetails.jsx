import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getScholarshipById } from "../service/ScholarshipApi";
import { applyScholarship } from "../service/ApplicationApi";
import { jwtDecode } from "jwt-decode";
import "../css/Scholarship.css";

function ScholarshipDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [scholarship, setScholarship] = useState(null);
    const [applying, setApplying] = useState(false);

    const token = localStorage.getItem("token");
    const decoded = token ? jwtDecode(token) : null;
    const isStudent = decoded && decoded.role === "STUDENT";

    useEffect(() => {

        async function loadScholarship() {

            try {

                const response = await getScholarshipById(id);
                setScholarship(response.data);

            } catch (error) {

                console.log(error);
                alert("Unable to load Scholarship Details");

            }
        }

        loadScholarship();

    }, [id]);

    async function handleApply() {

        if (!token) {
            alert("Please login to apply.");
            navigate("/login");
            return;
        }

        setApplying(true);

        try {

            await applyScholarship({
                studentId: decoded.userId,
                scholarshipId: scholarship.id
            });

            alert("Application submitted successfully!");
            navigate("/my-applications");

        } catch (error) {

            console.log(error);
            alert("Failed to apply. You may have already applied.");

        } finally {
            setApplying(false);
        }
    }

    if (!scholarship) {
        return <h2>Loading Scholarship Details...</h2>;
    }

    return (

        <div className="scholarship-details">

            <h1>{scholarship.title}</h1>

            <hr />

            <p>
                <strong>Description :</strong>
                <br />
                {scholarship.description}
            </p>

            <p>
                <strong>Amount :</strong>
                ₹ {scholarship.amount}
            </p>

            <p>
                <strong>Eligibility :</strong>
                {scholarship.eligibility}
            </p>

            <p>
                <strong>Category :</strong>
                {scholarship.category}
            </p>

            <p>
                <strong>Last Date :</strong>
                {scholarship.lastDate}
            </p>

            <p>
                <strong>Status :</strong>
                <span className={scholarship.status === "ACTIVE" ? "status-approved" : "status-rejected"}>
                    {scholarship.status}
                </span>
            </p>

            <br />

            {isStudent && (
                <button
                    onClick={handleApply}
                    disabled={applying}
                >
                    {applying ? "Applying..." : "🎓 Apply Now"}
                </button>
            )}

        </div>

    );

}

export default ScholarshipDetails;