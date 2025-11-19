// import React, { useState } from "react";

// import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";
// import CourseRegistration from "./coursemanagement/CourseRegistration";
// import CourseList from "./coursemanagement/CourseList";
// import CourseUpdate from "./coursemanagement/CourseUpdate";
// import CourseDelete from "./coursemanagement/CourseDelete";
// import FacultyRegistration from "./facultymanagement/FacultyRegistration";

// export default function App() {
//   const [active, setActive] = useState("register");

//   const [courses, setCourses] = useState([]);

//   // Register new course
//   const handleRegisterCourse = (course) => {
//     setCourses([...courses, course]);
//   };

//   // Update existing course
//   const handleUpdateCourse = (updated) => {
//     setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));
//   };

//   // Delete course
//   const handleDelete = (id) => {
//     setCourses(courses.filter((c) => c.id !== id));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <CourseNavigationBar setActive={setActive} />

//       {active === "register" && (
//         <CourseRegistration onRegisterCourse={handleRegisterCourse} />
//       )}

//       {active === "list" && <CourseList courses={courses} />}

//       {active === "update" && (
//         <CourseUpdate courses={courses} onUpdate={handleUpdateCourse} />
//       )}

//       {active === "delete" && (
//         <CourseDelete courses={courses} onDelete={handleDelete} />
//       )}
//     </div>
//   );  
// }


import React, { useState } from "react";
import FacultyNavigationBar from "./facultymanagement/FacultyNavigationBar";
import FacultyRegistration from "./facultymanagement/FacultyRegistration";
import FacultyList from "./facultymanagement/FacultyList";
import FacultyProfile from "./facultymanagement/FacultyProfile";
import FacultyUpdate from "./facultymanagement/FacultyUpdate";

export default function App() {
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [page, setPage] = useState("register"); // default page

  // Add new faculty
  const handleRegisterFaculty = (facultyData) => {
    setFacultyList((prev) => [...prev, facultyData]);
  };

  // Update existing faculty
  const handleUpdateFaculty = (updatedFaculty) => {
    setFacultyList((prev) =>
      prev.map((f) => (f.id === updatedFaculty.id ? updatedFaculty : f))
    );
    setSelectedFaculty(updatedFaculty);
  };

  // Select faculty from list
  const handleSelectFaculty = (faculty) => {
    setSelectedFaculty(faculty);
    setPage("profile");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Faculty Management System</h1>

      {/* Navigation Bar */}
      <FacultyNavigationBar
        onNavigate={setPage}
        currentPage={page}
      />

      {/* Page Routing */}
      {page === "register" && (
        <FacultyRegistration onRegisterFaculty={handleRegisterFaculty} />
      )}

      {page === "list" && (
        <FacultyList
          facultyList={facultyList}
          onSelectFaculty={handleSelectFaculty}
        />
      )}

      {page === "profile" && <FacultyProfile facultyList={facultyList} />}

     {page === "update" && (
  <FacultyUpdate
    facultyList={facultyList}
    onUpdateFaculty={handleUpdateFaculty}
  />
)}

    </div>
  );
}

