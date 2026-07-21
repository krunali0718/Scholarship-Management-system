import { useEffect, useState } from "react";
import {
    getAllApplications,
    approveApplication,
    rejectApplication
} from "../service/ApplicationApi";
import ApplicationCard from "../components/ApplicationCard";
import "../css/Application.css";

function AdminApplications() {

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("ALL");

    useEffect(() => {
        loadApplications();
    }, []);

    async function loadApplications() {

        setLoading(true);

        try {

            const response = await getAllApplications();
            setApplications(response.data || []);

        } catch (error) {

            console.log(error);
            alert("Unable to load applications.");

        } finally {

            setLoading(false);

        }
    }

    async function handleApprove(id) {

        try {

            await approveApplication(id);
            loadApplications();

        } catch (error) {

            console.log(error);
            alert("Unable to approve application.");

        }
    }

    async function handleReject(id) {

        try {

            await rejectApplication(id);
            loadApplications();

        } catch (error) {

            console.log(error);
            alert("Unable to reject application.");

        }
    }

    const filtered = applications.filter((a) =>
        filter === "ALL" ? true : a.status === filter
    );

    return (

        <div className="application-container">

            <h1>Review Applications</h1>

            <div className="admin-toolbar" style={{ justifyContent: "center", gap: 10 }}>

                {
                    ["ALL", "PENDING", "APPROVED", "REJECTED"].map((option) => (

                        <button
                            key={option}
                            className={
                                filter === option
                                    ? "btn btn-navy"
                                    : "btn btn-outline-navy"
                            }
                            style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                            onClick={() => setFilter(option)}
                        >
                            {option}
                        </button>

                    ))
                }

            </div>

            <br />

            {
                loading ? (

                    <p className="muted-note" style={{ textAlign: "center" }}>
                        Loading applications…
                    </p>

                ) : filtered.length === 0 ? (

                    <div className="empty-note">
                        <p>No applications match this filter.</p>
                    </div>

                ) : (

                    filtered.map((application) => (

                        <ApplicationCard
                            key={application.id}
                            application={application}
                            onApprove={
                                application.status === "PENDING"
                                    ? handleApprove
                                    : undefined
                            }
                            onReject={
                                application.status === "PENDING"
                                    ? handleReject
                                    : undefined
                            }
                        />

                    ))

                )
            }

        </div>

    );

}

export default AdminApplications;
