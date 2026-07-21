import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getScholarshipById, applyScholarship } from "../service/ScholarshipApi";
import "../css/Scholarship.css";

function ScholarshipDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [scholarship, setScholarship] = useState(null);
    const [applying, setApplying] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        loadScholarship();
    }, [id]);

    async function loadScholarship() {
        try {
            const response = await getScholarshipById(id);
            setScholarship(response.data);
        } catch (error) {
            console.log(error);
            alert("Unable to load Scholarship Details");
        }
    }

    async function handleApply() {
        if (!token) {
            alert("Please log in as a student to apply.");
            navigate("/login");
            return;
        }

        const { id: studentId } = jwtDecode(token);

        setApplying(true);

        try {
            await applyScholarship({
                studentId,
                scholarshipId: Number(id)
            });
            alert("Application submitted successfully.");
        } catch (error) {
            console.log(error);
            alert("Unable to apply for this scholarship.");
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

            <button>
                Apply Scholarship
            </button>

        </div>

    );

}

export default ScholarshipDetails;