import { useState } from "react";

function FormComponent({ onSubmit }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    city: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user); // send data to parent component
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Enter Student Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
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
          type="text"
          name="course"
          placeholder="Enter Course"
          value={user.course}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={user.city}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;