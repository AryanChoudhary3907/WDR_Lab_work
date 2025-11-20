import React from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

export default function CourseRegistration() {
  const { addCourse } = useAppContext();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // normalize data types
    const newCourse = {
      id: Number(data.courseId),
      name: data.courseName,
      description: data.description,
      duration: data.duration + "hr",
    };

    addCourse(newCourse);
    alert("Course registered successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Course Registration</h2>

      <label>Course Id:</label>
      <input type="number" {...register("courseId")} required />
      <br /><br />

      <label>Course Name:</label>
      <input {...register("courseName")} required />
      <br /><br />

      <label>Description:</label>
      <input {...register("description")} required />
      <br /><br />

      <label>Duration (hours):</label>
      <input type="number" {...register("duration")} required />
      <br /><br />

      <button type="submit">Register Course</button>
    </form>
  );
}
