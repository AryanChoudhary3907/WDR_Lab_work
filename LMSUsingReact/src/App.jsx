import React, { useState } from "react";

import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";
import CourseRegistration from "./coursemanagement/CourseRegistration";
import CourseList from "./coursemanagement/CourseList";
import CourseUpdate from "./coursemanagement/CourseUpdate";
import CourseDelete from "./coursemanagement/CourseDelete";

export default function App() {
  const [active, setActive] = useState("register");

  const [courses, setCourses] = useState([]);

  // Register new course
  const handleRegisterCourse = (course) => {
    setCourses([...courses, course]);
  };

  // Update existing course
  const handleUpdateCourse = (updated) => {
    setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));
  };

  // Delete course
  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <CourseNavigationBar setActive={setActive} />

      {active === "register" && (
        <CourseRegistration onRegisterCourse={handleRegisterCourse} />
      )}

      {active === "list" && <CourseList courses={courses} />}

      {active === "update" && (
        <CourseUpdate courses={courses} onUpdate={handleUpdateCourse} />
      )}

      {active === "delete" && (
        <CourseDelete courses={courses} onDelete={handleDelete} />
      )}
    </div>
  );
}
