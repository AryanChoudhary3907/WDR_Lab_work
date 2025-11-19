// Component for course registration form

import React from "react";
import { useForm } from "react-hook-form";

export default function FacultyRegistration({ onRegisterFaculty }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    
    onRegisterFaculty(data); // send data to App.jsx
    alert("Registraion Successful!")
    reset(); // clear form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Faculty Registration</h2>

      <label>Id:</label>
      <input type="text" {...register("id")} required />
      <br /> <br />
      <label>Name:</label>
      <input type="text" {...register("name")} required />
<br /> <br />
      <label>Age:</label>
      <input type="number" {...register("age")} required />
<br /> <br />
      <label>Qualification:</label>
      <input type="text" {...register("qualification")} required />
<br /> <br />
      <label>Joined At:</label>
      <input type="date" {...register("joinedAt")} required />
<br /> <br />
      <label>Select Faculty Status:</label>
      <select {...register("status")} required>
        <option value="">--select--</option>
        <option value="active">Active</option>
        <option value="left">Left</option>
      </select>
<br /> <br />
      <button type="submit">Register Faculty</button>
    </form>
  );
}
