import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

export default function FacultyUpdate() {
  const { facultyList, updateFaculty } = useAppContext();
  const { register, handleSubmit, reset } = useForm();
  const [selectedId, setSelectedId] = useState("");

  const selected = facultyList.find((f) => f.id === selectedId);

  useEffect(() => {
    if (selected) reset(selected);
  }, [selected, reset]);

  const onSubmit = (data) => {
    updateFaculty(data);
    alert("Updated Successfully!");
  };

  return (
    <div>
      <h2>Update Faculty</h2>

      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">-- Select Faculty --</option>
        {facultyList.map((f) => (
          <option key={f.id} value={f.id}>
            {f.id} - {f.name}
          </option>
        ))}
      </select>

      {selected && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("id")} readOnly />

          <input {...register("name")} required />
          <input type="number" {...register("age")} required />
          <input {...register("qualification")} required />
          <input type="date" {...register("joinedAt")} required />

          <select {...register("status")} required>
            <option value="active">Active</option>
            <option value="left">Left</option>
          </select>

          <button>Update</button>
        </form>
      )}
    </div>
  );
}
