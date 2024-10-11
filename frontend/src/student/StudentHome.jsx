import 'bootstrap/dist/css/bootstrap.min.css'

import StudentForm from './StudentForm'
import StudentTable from './StudentTable'
export default function StudentHome() {
    return (
        <div >
            <div className="container">
                <div className="row">
                    <StudentForm />
                </div>
                <div className="row">
                    <div className="col-6">
                        <StudentTable />
                    </div>

                </div>
            </div>

        </div>
    )
}
