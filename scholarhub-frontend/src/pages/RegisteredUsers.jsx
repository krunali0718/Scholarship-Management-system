import { useState, useEffect } from "react";
import { getUsers } from "../service/RegisterApi";
import "../css/UserTable.css";

function RegisteredUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {

        try {

            const response = await getUsers();

            setUsers(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to fetch users.");

        }

    }

    return (

        <div className="table-container">

            <h1>Registered Users</h1>

            <br />

            <table border="1" cellPadding="10">

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

                                <td>{user.role}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RegisteredUsers;