import React from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

export default function FacultyRegistration() {
  const { addFaculty } = useAppContext();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addFaculty(data);
    alert("Registration Successful!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Faculty Registration</h2>

      <label>Id:</label>
      <input {...register("id")} required />

      <label>Name:</label>
      <input {...register("name")} required />

      <label>Age:</label>
      <input type="number" {...register("age")} required />

      <label>Qualification:</label>
      <input {...register("qualification")} required />

      <label>Joined At:</label>
      <input type="date" {...register("joinedAt")} required />

      <label>Status:</label>
      <select {...register("status")} required>
        <option value="active">Active</option>
        <option value="left">Left</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}
