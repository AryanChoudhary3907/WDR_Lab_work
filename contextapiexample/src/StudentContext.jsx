import { createContext,useState } from "react";

// to create context
export const StudentContext = createContext();

// to create a Provider Component
export function StudentProvider({children})
{
   // creating state variable of array type to student data
   const [students , setStudent] = useState([]);
   // function to add new student data into the array
   const addStudent = (student) => {
              setStudent((prev) => [...prev, student])
   };
   //function to update the student data
   //function to delete the student data

   //to return 
   return(
    <StudentContext.Provider value={(students,addStudent)}>
        {children}
    </StudentContext.Provider>
   )
}

