import React from "react";
import { useForm } from "react-hook-form";

export default function CourseDelete({ courses, onDelete }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onDelete(Number(data.id));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Delete Registered Course</h2>

      <label>Select Course ID:</label>
      <select {...register("id")} required>
        <option value="">--select--</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.id} — {c.name}
          </option>
        ))}
      </select>

      <button type="submit">Delete Course</button>
    </form>
  );
}
