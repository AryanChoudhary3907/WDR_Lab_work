import { useState } from 'react';
import './App.css';
import Studentregistration from './Component/Studentregistration.jsx';
import StudentList from './Component/StudentList.jsx';
import StudentProfile from './Component/StudentProfile.jsx';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addFormData = (data) => {
    setStudents((prev) => [...prev, data]);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>

      <Studentregistration onSubmit={addFormData} />
      <hr />

      <StudentList data={students} onStudentClick={handleStudentClick} />
      <StudentProfile data={selectedStudent} />
    </div>
  );
}

export default App;
