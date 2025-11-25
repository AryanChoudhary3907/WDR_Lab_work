import { useState } from 'react';
import './App.css';
import Studentregistration from './Component/Studentregistration.jsx';
import StudentList from './Component/StudentList.jsx';
import StudentProfile from './Component/StudentProfile.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    <Router>   
      <div className="App">
        <h1>Student Management System</h1>

        <ul style={{listStyleType:"none",backgroundColor:"blue",width:"100%", float:'right'}}>
          <li style={{float:"left",backgroundColor:"blue",padding:"10px 20px"}}>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>Student Registration</Link>
          </li>
          <li style={{float:"left",backgroundColor:"blue",padding:"10px 20px"}}>
            <Link to="/stdlist" style={{textDecoration:"none",color:"white"}}>Student List</Link>
          </li>
          <li style={{float:"left",backgroundColor:"blue",padding:"10px 20px"}}>
            <Link to="/profile" style={{textDecoration:"none",color:"white"}}>Student Profile</Link>
          </li>
        </ul>

        <br/><br/><br/>

        <Routes>
          
          <Route path="/" element={<Studentregistration onSubmit={addFormData} />}/>

       
          <Route path="/stdlist" element={<StudentList data={students} onStudentClick={handleStudentClick} />}/>

         
          <Route path="/profile" element={<StudentProfile data={selectedStudent} />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
