import React from "react";

export default function FacultyNavigationBar({ onNavigate, currentPage }) {
  const navStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    marginRight: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "#f2f2f2",
  };

  const activeStyle = {
    ...navStyle,
    background: "#d1e0ff",
    border: "1px solid #4a78ff",
    fontWeight: "bold",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        style={currentPage === "register" ? activeStyle : navStyle}
        onClick={() => onNavigate("register")}
      >
        Register Faculty
      </button>

      <button
        style={currentPage === "list" ? activeStyle : navStyle}
        onClick={() => onNavigate("list")}
      >
        Faculty List
      </button>

      <button
        style={currentPage === "profile" ? activeStyle : navStyle}
        onClick={() => onNavigate("profile")}
      >
        Faculty Profile
      </button>

      <button
        style={currentPage === "update" ? activeStyle : navStyle}
        onClick={() => onNavigate("update")}
      >
        Update Faculty
      </button>
    </div>
  );
}
