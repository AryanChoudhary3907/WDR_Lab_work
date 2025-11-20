import React from "react";
import { Link } from "react-router-dom";

export default function CourseNavigationBar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/course/register"><button>Course Registration</button></Link>
      <Link to="/course/list"><button>Course List</button></Link>
      <Link to="/course/update"><button>Update Course</button></Link>
      <Link to="/course/delete"><button>Delete Course</button></Link>
    </div>
  );
}
