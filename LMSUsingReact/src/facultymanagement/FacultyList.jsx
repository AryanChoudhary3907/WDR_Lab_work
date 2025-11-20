import React from "react";
import { useAppContext } from "../context/AppContext";

export default function FacultyList() {
  const { facultyList } = useAppContext();

  return (
    <div>
      <h2>Faculty List</h2>

      {facultyList.length === 0 ? (
        <p>No faculty found.</p>
      ) : (
        facultyList.map((f) => (
          <div key={f.id} style={{ border: "1px solid #aaa", margin: "10px", padding: "10px" }}>
            <p><b>ID:</b> {f.id}</p>
            <p><b>Name:</b> {f.name}</p>
            <p><b>Status:</b> {f.status}</p>
          </div>
        ))
      )}
    </div>
  );
}
