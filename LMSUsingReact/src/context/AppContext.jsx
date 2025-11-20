import { createContext, useContext, useState } from "react";

// to create context
const AppContext = createContext();

//to create Provider component
export function AppProvider({ children }) {
  // creating state variable of array type to faculty data
  const [facultyList, setFacultyList] = useState([]);
  // creating state variable of array type to course data
  const [courseList, setCourseList] = useState([]);

  // Faculty functions
  // fuction to add faculty details
  const addFaculty = (data) => setFacultyList([...facultyList, data]);
  // fuction to update faculty details by faculty ID
  const updateFaculty = (data) => {
    setFacultyList(
      facultyList.map((f) => (f.id === data.id ? data : f))
    );
  };
  // function to delete faculty by faculty ID
  const deleteFaculty = (id) => {
    setFacultyList(facultyList.filter((f) => f.id !== id));
  };

  // Course functions
  // fuction to add course details
  const addCourse = (data) => setCourseList([...courseList, data]);
  // fuction to update course by course ID
  const updateCourse = (data) => {
    setCourseList(
      courseList.map((c) => (c.id === data.id ? data : c))
    );
  };
  //function to delete course by course ID
  const deleteCourse = (id) => {
    setCourseList(courseList.filter((c) => c.id !== id));
  };
  //to return
  return (
    <AppContext.Provider
      value={{
        facultyList,
        addFaculty,
        updateFaculty,
        deleteFaculty,

        courseList,
        addCourse,
        updateCourse,
        deleteCourse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
