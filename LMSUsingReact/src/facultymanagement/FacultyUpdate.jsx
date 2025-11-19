import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function FacultyUpdate({ facultyList, onUpdateFaculty }) {
  const { register, handleSubmit, reset } = useForm();

  const [selectedId, setSelectedId] = useState("");

  // Find faculty by selected id
  const selectedFaculty = facultyList.find((f) => f.id === selectedId);

  // Load faculty data into form when selected
  useEffect(() => {
    if (selectedFaculty) {
      reset(selectedFaculty);
    }
  }, [selectedFaculty, reset]);

  const onSubmit = (data) => {
    onUpdateFaculty(data);
    alert("Update Successfully!")
    reset();
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        width: "350px",
        background: "#f9f9f9",
      }}
    >
      <h2>Update Faculty</h2>

      {/* Select Faculty ID */}
      <label>Select Faculty ID:</label>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "15px" }}
      >
        <option value="">-- Select ID --</option>
        {facultyList.map((f) => (
          <option key={f.id} value={f.id}>
            {f.id} — {f.name}
          </option>
        ))}
      </select>

      {/* Show form only after selecting an ID */}
      {selectedFaculty ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Faculty Id:</label>
          <input type="text" {...register("id")} readOnly />
           <br /> <br />
          <label>Faculty Name:</label>
          <input type="text" {...register("name")} required />
<br /> <br />
          <label>Faculty Age:</label>
          <input type="number" {...register("age")} required />
<br /> <br />
          <label>Qualification:</label>
          <input type="text" {...register("qualification")} required />
<br /> <br />
          <label>Joined At:</label>
          <input type="date" {...register("joinedAt")} required />
<br /> <br />
          <label>Status:</label>
          <select {...register("status")} required>
            <option value="active">Active</option>
            <option value="left">Left</option>
          </select>

          <button type="submit" style={{ marginTop: "10px" }}>
            Update Faculty
          </button>
        </form>
      ) : (
        <p>Please select a faculty to update.</p>
      )}
    </div>
  );
}
