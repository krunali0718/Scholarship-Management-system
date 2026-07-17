import { Link } from "react-router-dom";
import "../css/Scholarship.css";

function ScholarshipCard({ scholarship, onDelete }) {

    const token = localStorage.getItem("token");

    return (

        <div className="scholarship-card">

            <h2>{scholarship.title}</h2>

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
                <strong>Category :</strong>
                {scholarship.category}
            </p>

            <p>
                <strong>Eligibility :</strong>
                {scholarship.eligibility}
            </p>

            <p>
                <strong>Last Date :</strong>
                {scholarship.lastDate}
            </p>

            <p>
                <strong>Status :</strong>
                {scholarship.status}
            </p>

            <div className="card-buttons">

                <Link to={`/scholarship/${scholarship.id}`}>
                    <button>
                        View Details
                    </button>
                </Link>

                {
                    token && (

                        <Link to="/my-applications">
                            <button>
                                Apply
                            </button>
                        </Link>

                    )
                }

                {
                    onDelete && (

                        <button
                            onClick={() => onDelete(scholarship.id)}
                        >
                            Delete
                        </button>

                    )
                }

            </div>

        </div>

    );
}

export default ScholarshipCard;