import { useEffect, useState } from "react";
import { getUsers } from "../service/RegisterApi";
import "../css/UserTable.css";

function RegisteredUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {

        setLoading(true);

        try {

            const response = await getUsers();

            setUsers(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to fetch users.");

        } finally {

            setLoading(false);

        }

    }

    function roleClass(role) {

        if (role === "ADMIN") return "role-admin";
        if (role === "STUDENT") return "role-student";
        return "role-trainer";

    }

    return (

        <div className="table-container">

            <h1>Registered Users</h1>

            <button
                className="users-btn"
                onClick={loadUsers}
                disabled={loading}
            >
                {loading ? "Loading…" : "Refresh"}
            </button>

            <br /><br />

            <table>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>College</th>
                        <th>Course</th>
                        <th>CGPA</th>
                        <th>Family Income</th>
                        <th>Role</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        !loading && users.length === 0 && (
                            <tr>
                                <td colSpan="9">No registered users found</td>
                            </tr>
                        )
                    }

                    {

                        users.map((user) => (

                            <tr key={user.id}>

                                <td>{user.id}</td>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>{user.phone}</td>

                                <td>{user.college}</td>

                                <td>{user.course}</td>

                                <td>{user.cgpa}</td>

                                <td>{user.familyIncome}</td>

                                <td>
                                    <span className={`role ${roleClass(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RegisteredUsers;