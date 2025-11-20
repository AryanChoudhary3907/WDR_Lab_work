import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";

// Faculty components
import FacultyNavigationBar from "./facultymanagement/FacultyNavigationBar";
import FacultyRegistration from "./facultymanagement/FacultyRegistration";
import FacultyList from "./facultymanagement/FacultyList";
import FacultyProfile from "./facultymanagement/FacultyProfile";
import FacultyUpdate from "./facultymanagement/FacultyUpdate";
import FacultyDelete from "./facultymanagement/FacultyDelete";

// Course components
import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";
import CourseRegistration from "./coursemanagement/CourseRegistration";
import CourseList from "./coursemanagement/CourseList";
import CourseUpdate from "./coursemanagement/CourseUpdate";
import CourseDelete from "./coursemanagement/CourseDelete";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <h1 style={{ textAlign: "center" }}>LMS </h1>

        {/* Navbars */}
        <FacultyNavigationBar />
        <CourseNavigationBar />

        <Routes>
          {/* Faculty Routes */}
          <Route path="/faculty/register" element={<FacultyRegistration />} />
          <Route path="/faculty/list" element={<FacultyList />} />
          <Route path="/faculty/profile" element={<FacultyProfile />} />
          <Route path="/faculty/update" element={<FacultyUpdate />} />
          <Route path="/faculty/delete" element={<FacultyDelete />} />

          {/* Course Routes */}
          <Route path="/course/register" element={<CourseRegistration />} />
          <Route path="/course/list" element={<CourseList />} />
          <Route path="/course/update" element={<CourseUpdate />} />
          <Route path="/course/delete" element={<CourseDelete />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
