import userpng from '../img/userpng.png'
const StudentForm = () => {  
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <img className='img-fluid'  src={userpng} alt="userImage"  />
                </div>
                <div className="col-6 mt-5">
                    <div>
                        <h3>Student Information</h3>
                        <hr />
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age:</label>
                                <input type="text" className="form-control" id="age" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Contact Number:</label>
                                <input type="text" className="form-control" id="contact" />
                            </div>
                        </form>
                    </div>

                    <div className="mt-6">
                        <h3>Guardian Information</h3>
                        <hr />
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Address:</label>
                                <input type="text" className="form-control" id="age" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Contact Number:</label>
                                <input type="text" className="form-control" id="contact" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )

}
export default StudentForm
