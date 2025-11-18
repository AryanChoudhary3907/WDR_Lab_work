// Component for course registration form

import React from "react";
import { useForm } from "react-hook-form";

export default function CourseRegistration({ onRegisterCourse }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newCourse = {
      id: data.courseId, // auto ID
      name: data.courseName,
      description: data.description,
      duration: data.duration+"hr",
    };

    onRegisterCourse(newCourse); // send data to App.jsx
    reset(); // clear form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Course Registration</h2>

       <label>Course Id:</label>
      <input {...register("courseId")} required />

      <label>Course Name:</label>
      <input {...register("courseName")} required />

      <label>Descritpion:</label>
      <input {...register("description")} required />

      <label>Duration:</label>
      <input {...register("duration")} required />

      <button type="submit">Register Course</button>
    </form>
  );
}
