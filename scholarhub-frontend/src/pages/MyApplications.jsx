import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
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

            // Temporary student ID
            const studentId = 1;

            const response = await getStudentApplications(studentId);
            setApplications(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load applications.");

        }
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

                                        <td>{application.status}</td>

                                        <td>{application.remarks}</td>

                                    </tr>

                                ))

                            )

                    }

                </tbody>

                </table>

            )}

        </div>

    );
}

export default MyApplications;
