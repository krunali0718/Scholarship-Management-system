import { useEffect, useState } from "react";
import { getAllApplications } from "../service/ApplicationApi";
import ApplicationCard from "../components/ApplicationCard";
import api from "../service/api";
import "../css/Application.css";

function Applications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    async function loadApplications() {
        try {
            const response = await getAllApplications();
            setApplications(response.data);
        } catch (error) {
            console.log(error);
            alert("Unable to load applications.");
        }
    }

    async function handleApprove(id) {
        try {
            await api.put(`/application/approve/${id}`);
            alert("Application Approved Successfully");
            loadApplications();
        } catch (error) {
            console.log(error);
            alert("Unable to approve application");
        }
    }

    async function handleReject(id) {
        try {
            await api.put(`/application/reject/${id}`);
            alert("Application Rejected Successfully");
            loadApplications();
        } catch (error) {
            console.log(error);
            alert("Unable to reject application");
        }
    }

    return (
        <div className="application-container" style={{ width: "90%", margin: "40px auto" }}>
            <h1 style={{ textAlign: "center", color: "#2563eb", marginBottom: "30px" }}>
                All Scholarship Applications
            </h1>
            <div className="application-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                {applications.length === 0 ? (
                    <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>No Applications Found</p>
                ) : (
                    applications.map((app) => (
                        <ApplicationCard
                            key={app.id}
                            application={app}
                            onApprove={handleApprove}
                            onReject={handleReject}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Applications;
