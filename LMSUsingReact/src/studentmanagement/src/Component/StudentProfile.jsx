import React from "react";

function StudentProfile({ data }) {
  // Handle case where no data is passed
  if (!data) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Student Information</h2>
        <p>No student selected yet.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Student Information</h2>
      <h3>Id: {data.id}</h3>
      <h3>Name: {data.name}</h3>
      <h3>Standard: {data.standard}</h3>
      <h3>Age: {data.age}</h3>
      <h3>Roll No: {data.rollno}</h3>
    </div>
  );
}

export default StudentProfile;
