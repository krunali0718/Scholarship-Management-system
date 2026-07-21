import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getStudentApplications } from "../service/ApplicationApi";
import "../css/Application.css";

function MyApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    async function loadApplications() {

        try {

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please log in to view your applications.");
                return;
            }

            const { id: studentId } = jwtDecode(token);

            const response = await getStudentApplications(studentId);

            setApplications(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load applications.");

        }
    }

    function statusClass(status) {

        if (status === "APPROVED") return "status-approved";
        if (status === "REJECTED") return "status-rejected";
        return "status-pending";

    }

    return (

        <div className="application-container">

            <h1>My Scholarship Applications</h1>

            <table>

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

                    {
                        applications.length === 0 ?

                            (
                                <tr>
                                    <td colSpan="5">
                                        No Applications Found
                                    </td>
                                </tr>
                            )

                            :

                            (

                                applications.map((application) => (

                                    <tr key={application.id}>

                                        <td>{application.id}</td>

                                        <td>{application.scholarshipTitle}</td>

                                        <td>{application.applicationDate}</td>

                                        <td>
                                            <span
                                                className={`status-pill ${statusClass(application.status)}`}
                                            >
                                                {application.status}
                                            </span>
                                        </td>

                                        <td>{application.remarks}</td>

                                    </tr>

                                ))

                            )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default MyApplications;