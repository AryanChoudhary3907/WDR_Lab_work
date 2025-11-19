import React from "react";

export default function FacultyList({ facultyList }) {
  return (
    <div>
      <h2>Registered Faculty List</h2>

      {facultyList.length === 0 ? (
        <p>No faculty registered yet.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Qualification</th>
              <th>Joined At</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {facultyList.map((faculty, index) => (
              <tr key={index}>
                <td>{faculty.id}</td>
                <td>{faculty.name}</td>
                <td>{faculty.age}</td>
                <td>{faculty.qualification}</td>
                <td>{faculty.joinedAt}</td>
                <td>{faculty.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
