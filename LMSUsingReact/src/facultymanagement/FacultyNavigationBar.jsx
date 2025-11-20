import React from "react";
import { Link } from "react-router-dom";

export default function FacultyNavigationBar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/faculty/register"><button>Register Faculty</button></Link>
      <Link to="/faculty/list"><button>Faculty List</button></Link>
      <Link to="/faculty/profile"><button>Faculty Profile</button></Link>
      <Link to="/faculty/update"><button>Update Faculty</button></Link>
      <Link to="/faculty/delete"><button>Delete Faculty</button></Link>
    </div>
  );
}
