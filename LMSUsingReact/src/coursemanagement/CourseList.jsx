import React from "react";

export default function CourseList({ courses }) {
  return (
    <div>
      <h2>Registered Courses</h2>

      {courses.length === 0 ? (
        <p>No courses registered.</p>
      ) : (
        <ul>
          {courses.map((c) => (
            <li key={c.id}>
              <strong>{c.id}. </strong><strong>{c.name}</strong> — {c.description} ({c.duration})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
