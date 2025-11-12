
function DisplayComponent({ data }) {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Student Information</h2>
      <h3>Name: {data.name}</h3>
      <h3>Email: {data.email}</h3>
      <h3>Age: {data.age}</h3>
      <h3>Course: {data.course}</h3>
      <h3>City: {data.city}</h3>
    </div>
  );
}

export default DisplayComponent;