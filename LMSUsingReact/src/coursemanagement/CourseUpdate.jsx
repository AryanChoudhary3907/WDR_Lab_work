import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

export default function CourseUpdate() {
  const { courseList, updateCourse } = useAppContext();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedId, setSelectedId] = useState("");

  const selectedCourse = courseList.find((c) => c.id === Number(selectedId));

  useEffect(() => {
    if (selectedCourse) {
      // populate the form with existing values (strip "hr" from duration)
      setValue("id", selectedCourse.id);
      setValue("courseName", selectedCourse.name);
      setValue("description", selectedCourse.description);
      setValue("duration", selectedCourse.duration?.replace("hr", "") ?? "");
    }
  }, [selectedCourse, setValue]);

  const onSubmit = (data) => {
    const updated = {
      id: Number(data.id),
      name: data.courseName,
      description: data.description,
      duration: data.duration + "hr",
    };

    updateCourse(updated);
    alert("Course updated successfully!");
    reset();
    setSelectedId("");
  };

  return (
    <div>
      <h2>Update Course</h2>

      <label>Select Course ID:</label>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">--select--</option>
        {courseList.map((c) => (
          <option key={c.id} value={c.id}>
            {c.id} — {c.name}
          </option>
        ))}
      </select>

      {selectedCourse ? (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 12 }}>
          <label>Course Id:</label>
          <input type="number" {...register("id")} readOnly />
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

          <button type="submit">Update Course</button>
        </form>
      ) : (
        <p>Please select a course to update.</p>
      )}
    </div>
  );
}
