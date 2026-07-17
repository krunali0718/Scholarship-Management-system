import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createScholarship } from "../service/ScholarshipApi";
import "../css/Scholarship.css";

function AddScholarship() {

    const navigate = useNavigate();

    const [scholarship, setScholarship] = useState({
        title: "",
        description: "",
        amount: "",
        eligibility: "",
        category: "",
        lastDate: "",
        status: "OPEN"
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setScholarship((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await createScholarship(scholarship);

            alert("Scholarship Added Successfully!");

            navigate("/scholarships");

        } catch (error) {

            console.log(error);

            alert("Unable to Add Scholarship.");

        }
    }

    return (

        <div className="scholarship-form-container">

            <h1>Add Scholarship</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Scholarship Title"
                    value={scholarship.title}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={scholarship.description}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="amount"
                    placeholder="Scholarship Amount"
                    value={scholarship.amount}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="eligibility"
                    placeholder="Eligibility"
                    value={scholarship.eligibility}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={scholarship.category}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="date"
                    name="lastDate"
                    value={scholarship.lastDate}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <select
                    name="status"
                    value={scholarship.status}
                    onChange={handleChange}
                >
                    <option value="OPEN">OPEN</option>
                    <option value="CLOSED">CLOSED</option>
                </select>

                <br /><br />

                <button type="submit">
                    Add Scholarship
                </button>

            </form>

        </div>

    );
}

export default AddScholarship;