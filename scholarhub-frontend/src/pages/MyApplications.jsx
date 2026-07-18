import { useEffect, useState } from "react";
import { getStudentApplications } from "../service/ApplicationApi";
import { jwtDecode } from "jwt-decode";
import "../css/Application.css";

function MyApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    async function loadApplications() {

        try {

            const token = localStorage.getItem("token");
            if (!token) return;

            const decoded = jwtDecode(token);
            const studentId = decoded.userId;

            const response = await getStudentApplications(studentId);
            setApplications(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load applications.");

        }
    }

    function getStatusClass(status) {
        if (status === "APPROVED") return "status-approved";
        if (status === "REJECTED") return "status-rejected";
        return "status-pending";
    }

    return (

        <div className="application-container">

            <h1>My Scholarship Applications</h1>

            {applications.length === 0 ? (

                <div className="no-applications">
                    <p>📋 No applications found. Browse scholarships and apply!</p>
                </div>

            ) : (

                <table border="1" cellPadding="10">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Scholarship</th>
                            <th>Applied Date</th>
                            <th>Status</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((application) => (
                            <tr key={application.id}>
                                <td>{application.id}</td>
                                <td>{application.scholarshipTitle}</td>
                                <td>{application.applicationDate}</td>
                                <td>
                                    <span className={getStatusClass(application.status)}>
                                        {application.status}
                                    </span>
                                </td>
                                <td>{application.remarks}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            )}

        </div>

    );
}

export default MyApplications;