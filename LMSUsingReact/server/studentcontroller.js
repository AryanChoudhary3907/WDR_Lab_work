import pool from './db.js'

//to create a function to fetch data from mysql table
export async function fetchStudentsList(req,res)
{
    // to fetch
	try
	{
		//fetching data from MySQL table
		const [result] = await pool.query("select * from student");
		//setting this data inot response in json
		res.json(result);
	}
	catch(err)
	{
		console.log("Unable to fetch data ",err);
	}

}

//to create a function to delete data from table by id
export async function deleteStudent(req,res) {
    
    //to delete
    try
	{
		await pool.query("DELETE FROM student WHERE id ="+req);
		res.json("Deletion Successfull");
	}
	catch(err)
	{
		console.log("Unable to delete data ",err);
	}
}

//to create a function to insert data in table
export async function createStudent(req , res) {
       
     //to create
    try
	{
		const [result] = await pool.query("INSERT INTO student (id, name, standard, age, rollno) VALUES ;");
		//setting this data into response in json
		res.json(result);
	}
	catch(err)
	{
		console.log("Unable to insert data ",err);
	}
}

