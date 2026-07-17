import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getScholarshipById } from "../service/ScholarshipApi";
import "../css/Scholarship.css";

function ScholarshipDetails() {

    const { id } = useParams();

    const [scholarship, setScholarship] = useState(null);

    useEffect(() => {
        loadScholarship();
    }, []);

    async function loadScholarship() {

        try {

            const response = await getScholarshipById(id);

            setScholarship(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load Scholarship Details");

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
                {scholarship.status}
            </p>

            <br />

            <button>
                Apply Scholarship
            </button>

        </div>

    );

}

export default ScholarshipDetails;