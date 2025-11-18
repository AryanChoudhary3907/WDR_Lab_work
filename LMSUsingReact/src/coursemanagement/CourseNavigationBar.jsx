import React from "react";

export default function CourseNavigationBar({ setActive }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setActive("register")}>Course Registration</button>
      <button onClick={() => setActive("list")}>Course List</button>
      <button onClick={() => setActive("update")}>Update Course</button>
      <button onClick={() => setActive("delete")}>Delete Course</button>
    </div>
  );
}
