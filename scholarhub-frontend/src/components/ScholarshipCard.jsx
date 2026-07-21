import { Link } from "react-router-dom";
import "../css/Scholarship.css";

function ScholarshipCard({ scholarship, onDelete }) {

    const statusClass =
        scholarship.status === "OPEN" || scholarship.status === "ACTIVE"
            ? "status-approved"
            : "status-pending";

    return (

        <div className="scholarship-card">

            <div className="scholarship-card-top">

                <span className="ticket-category">
                    {scholarship.category || "General"}
                </span>

                <span className={`status-pill ${statusClass}`}>
                    {scholarship.status}
                </span>

            </div>

            <h3 className="scholarship-card-title">
                {scholarship.title}
            </h3>

            <p className="scholarship-card-desc">
                {scholarship.description}
            </p>

            <div className="scholarship-card-meta">

                <div>
                    <span className="meta-label">Amount</span>
                    <span className="meta-value">
                        ₹{Number(scholarship.amount).toLocaleString("en-IN")}
                    </span>
                </div>

                <div>
                    <span className="meta-label">Last Date</span>
                    <span className="meta-value">
                        {scholarship.lastDate}
                    </span>
                </div>

            </div>

            <div className="card-buttons">

                <Link to={`/scholarship/${scholarship.id}`}>
                    <button className="btn btn-navy card-btn">
                        View Details
                    </button>
                </Link>

                {
                    onDelete && (

                        <button
                            className="btn btn-outline-navy card-btn"
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