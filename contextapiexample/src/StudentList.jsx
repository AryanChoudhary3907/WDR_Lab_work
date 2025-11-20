import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentList = ({ data, onStudentClick }) => {

    const {students} = useContext(StudentContext);

  return (
    <div>
      <h2>Student List</h2>
      <table
        border="1"
        cellPadding="8"
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Standard</th>
            <th>Age</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((s, i) => (
              <tr
                key={i}
                onClick={() => onStudentClick(s)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8f4fd")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
              >
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.standard}</td>
                <td>{s.age}</td>
                <td>{s.rollno}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align="center">
                No students added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
