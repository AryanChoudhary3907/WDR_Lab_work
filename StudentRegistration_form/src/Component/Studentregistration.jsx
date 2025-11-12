import { useState } from "react";

function Studentregistration({ onSubmit }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    standard: "",
    age: "",
    rollno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty submissions
    if (!user.id || !user.name || !user.standard || !user.age || !user.rollno) {
      alert("Please fill in all fields!");
      return;
    }

    onSubmit(user);

    // Reset form after submission
    setUser({
      id: "",
      name: "",
      standard: "",
      age: "",
      rollno: "",
    });
  };

  return (
    <div>
      <h2>Enter Student Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={user.id}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="standard"
          placeholder="Enter Standard"
          value={user.standard}
          onChange={handleChange}
        /><br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={user.age}
          onChange={handleChange}
        /><br /><br />

        <input
          type="number"
          name="rollno"
          placeholder="Enter Roll No"
          value={user.rollno}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Studentregistration;
