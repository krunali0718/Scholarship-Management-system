import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAllScholarships,
    deleteScholarship
} from "../service/ScholarshipApi";

function Scholarships() {

    const [scholarships, setScholarships] = useState([]);

    useEffect(() => {
        loadScholarships();
    }, []);

    async function loadScholarships() {

        try {

            const response = await getAllScholarships();
            setScholarships(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load scholarships.");

        }
    }

    async function removeScholarship(id) {

        try {

            await deleteScholarship(id);

            alert("Scholarship Deleted Successfully");

            loadScholarships();

        } catch (error) {

            console.log(error);

            alert("Unable to delete scholarship");

        }

    }

    return (

        <div>

            <h1>Scholarship List</h1>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Eligibility</th>
                        <th>Last Date</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        scholarships.map((scholarship) => (

                            <tr key={scholarship.id}>

                                <td>{scholarship.id}</td>

                                <td>{scholarship.title}</td>

                                <td>₹ {scholarship.amount}</td>

                                <td>{scholarship.category}</td>

                                <td>{scholarship.eligibility}</td>

                                <td>{scholarship.lastDate}</td>

                                <td>

                                    <Link
                                        to={`/scholarship/${scholarship.id}`}
                                    >
                                        <button>
                                            View
                                        </button>
                                    </Link>

                                    &nbsp;

                                    <button
                                        onClick={() =>
                                            removeScholarship(
                                                scholarship.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Scholarships;