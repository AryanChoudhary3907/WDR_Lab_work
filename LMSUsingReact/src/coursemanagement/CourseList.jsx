import React from "react";
import { useAppContext } from "../context/AppContext";

export default function CourseList() {
  const { courseList } = useAppContext();

  return (
    <div>
      <h2>Registered Courses</h2>

      {courseList.length === 0 ? (
        <p>No courses registered.</p>
      ) : (
        <ul>
          {courseList.map((c) => (
            <li key={c.id}>
              <strong>{c.id}. </strong><strong>{c.name}</strong> — {c.description} ({c.duration})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
