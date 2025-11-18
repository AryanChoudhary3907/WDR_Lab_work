import React from "react";
import { useForm } from "react-hook-form";

export default function CourseUpdate({ courses, onUpdate }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const id = Number(data.id);

    const updatedCourse = {
      id,
      name: data.courseName,
      description: data.description,
      duration: data.duration+"hr",
    };

    onUpdate(updatedCourse);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Update Registered Course</h2>

      <label>Select Course ID:</label>
      <select {...register("id")} required>
        <option value="">--select--</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.id} — {c.name}
          </option>
        ))}
      </select>

      <label>New Course Name:</label>
      <input {...register("courseName")} required />

      <label>New Description:</label>
      <input {...register("description")} required />

      <label>New Duration:</label>
      <input {...register("duration")} required />

      <button type="submit">Update Course</button>
    </form>
  );
}
