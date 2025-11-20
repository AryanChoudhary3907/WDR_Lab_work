import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function FacultyProfile() {
  const { facultyList } = useAppContext();
  const [selectedId, setSelectedId] = useState("");

  const faculty = facultyList.find((f) => f.id === selectedId);

  return (
    <div>
      <h2>Faculty Profile</h2>

      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">-- Select Faculty --</option>
        {facultyList.map((f) => (
          <option key={f.id} value={f.id}>
            {f.id} - {f.name}
          </option>
        ))}
      </select>

      {faculty && (
        <div style={{ marginTop: "15px" }}>
          <p><b>Name:</b> {faculty.name}</p>
          <p><b>Age:</b> {faculty.age}</p>
          <p><b>Qualification:</b> {faculty.qualification}</p>
          <p><b>Status:</b> {faculty.status}</p>
        </div>
      )}
    </div>
  );
}
