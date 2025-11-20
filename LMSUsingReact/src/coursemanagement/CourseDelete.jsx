import React from "react";
import { useAppContext } from "../context/AppContext";

export default function CourseDelete() {
  const { courseList, deleteCourse } = useAppContext();

  return (
    <div>
      <h2>Delete Course</h2>

      {courseList.length === 0 ? (
        <p>No courses to delete.</p>
      ) : (
        courseList.map((c) => (
          <div key={c.id} style={{ border: "1px solid #ccc", padding: 8, marginBottom: 8 }}>
            <p><b>{c.id}.</b> {c.name} — {c.description} ({c.duration})</p>
            <button onClick={() => {
              if (window.confirm(`Delete course "${c.name}" (ID ${c.id})?`)) {
                deleteCourse(c.id);
              }
            }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
