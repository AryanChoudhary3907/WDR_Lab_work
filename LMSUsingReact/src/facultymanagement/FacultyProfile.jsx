import React, { useState } from "react";

export default function FacultyProfile({ facultyList }) {
  const [selectedId, setSelectedId] = useState("");
  const selectedFaculty = facultyList.find((f) => f.id === selectedId);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        width: "350px",
        background: "#f9f9f9",
      }}
    >
      <h2>Faculty Profile</h2>

      {/* Select faculty ID */}
      <label>Select Faculty ID:</label>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "15px" }}
      >
        <option value="">-- Select ID --</option>
        {facultyList.map((f) => (
          <option key={f.id} value={f.id}>
            {f.id} — {f.name}
          </option>
        ))}
      </select>

      {/* Show Profile */}
      {!selectedFaculty ? (
        <p>No faculty selected.</p>
      ) : (
        <div>
          <p><strong>ID:</strong> {selectedFaculty.id}</p>
          <p><strong>Name:</strong> {selectedFaculty.name}</p>
          <p><strong>Age:</strong> {selectedFaculty.age}</p>
          <p><strong>Qualification:</strong> {selectedFaculty.qualification}</p>
          <p><strong>Joined At:</strong> {selectedFaculty.joinedAt}</p>
          <p><strong>Status:</strong> {selectedFaculty.status}</p>
        </div>
      )}
    </div>
  );
}
