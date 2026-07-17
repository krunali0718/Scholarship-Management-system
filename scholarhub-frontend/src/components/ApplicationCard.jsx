import "../css/Application.css";

function ApplicationCard({ application, onApprove, onReject }) {

    return (

        <div className="application-card">

            <h2>{application.scholarshipTitle}</h2>

            <p>
                <strong>Student :</strong>
                {application.studentName}
            </p>

            <p>
                <strong>Application Date :</strong>
                {application.applicationDate}
            </p>

            <p>
                <strong>Status :</strong>
                {application.status}
            </p>

            <p>
                <strong>Remarks :</strong>
                {application.remarks}
            </p>

            {
                onApprove && onReject && (

                    <div className="application-buttons">

                        <button
                            onClick={() => onApprove(application.id)}
                        >
                            ✅ Approve
                        </button>

                        <button
                            onClick={() => onReject(application.id)}
                        >
                            ❌ Reject
                        </button>

                    </div>

                )
            }

        </div>

    );

}

export default ApplicationCard;