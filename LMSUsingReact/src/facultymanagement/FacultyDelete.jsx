import React from "react";
import { useAppContext } from "../context/AppContext";

export default function FacultyDelete() {
  const { facultyList, deleteFaculty } = useAppContext();

  return (
    <div>
      <h2>Delete Faculty</h2>

      {facultyList.map((f) => (
        <div key={f.id} style={{ border: "1px solid #aaa", padding: "10px", margin: "10px" }}>
          <p><b>ID:</b> {f.id}</p>
          <p><b>Name:</b> {f.name}</p>

          <button onClick={() => deleteFaculty(f.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
