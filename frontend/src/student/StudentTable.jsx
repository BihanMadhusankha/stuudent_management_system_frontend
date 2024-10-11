
export default function StudentTable() {
  return (
    <div>
        <table className="table">
            <thead>
                <tr className="table-dark">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-active">
                    <td>John Doe</td>
                    <td>25</td>
                    <td>1234567890</td>
                </tr>
                <tr className="table-active">
                    <td>John Doe</td>
                    <td>25</td>
                    <td>1234567890</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
