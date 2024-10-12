import { useState } from 'react';
import userpng from '../img/userpng.png';

const StudentForm = () => {

    const [studentName, setName] = useState('');
    const [age, setAge] = useState('');
    const [contactNumber, setContact] = useState('');

    const [guardianName, setGuardianName] = useState('');
    const [guardianAddress, setGuardianAddress] = useState('');
    const [guardianContact, setGuardianContact] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleAge = (e) => setAge(e.target.value);
    const handleContact = (e) => setContact(e.target.value);

    const handleGuardianName = (e) => setGuardianName(e.target.value);
    const handleGuardianAddress = (e) => setGuardianAddress(e.target.value);
    const handleGuardianContact = (e) => setGuardianContact(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { studentName, age, contactNumber };

        console.log(studentName, age, contactNumber);
        alert("User added successfully");

        try {
            const add = await fetch("http://localhost:3001/api/student", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
            console.log(add);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <img className="img-fluid" src={userpng} alt="userImage" />
                </div>
                <div className="col-6 mt-5">

                    <div>
                        <h3>Student Information</h3>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="studentName" className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="studentName"
                                    onChange={handleName}
                                    value={studentName}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentAge" className="form-label">Age:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="studentAge"
                                    onChange={handleAge}
                                    value={age}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentContact" className="form-label">Contact Number:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="studentContact"
                                    onChange={handleContact}
                                    value={contactNumber}
                                />
                            </div>
                           
                            <div className="mt-6">
                                <h3>Guardian Information</h3>
                                <hr />
                                <div className="mb-3">
                                    <label htmlFor="guardianName" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="guardianName"
                                        onChange={handleGuardianName}
                                        value={guardianName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="guardianAddress" className="form-label">Address:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="guardianAddress"
                                        onChange={handleGuardianAddress}
                                        value={guardianAddress}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="guardianContact" className="form-label">Contact Number:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="guardianContact"
                                        onChange={handleGuardianContact}
                                        value={guardianContact}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 d-grid">
                                <button type="submit" className="btn btn-primary fw-bold fs-5">
                                    Submit Student Information
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudentForm;
