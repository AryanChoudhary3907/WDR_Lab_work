import pool from './db.js';

// ----------------------- Fetch Courses -----------------------
export async function fetchCoursesList(req, res) {
	try {
		const [result] = await pool.query("SELECT * FROM courses");
		res.json(result);
	} catch (err) {
		console.log("Unable to fetch data", err);
		res.status(500).json({ error: "Fetching failed" });
	}
}

// ----------------------- Fetch Courses by id-----------------------
export async function fetchCourses(req, res) {
	try {
		const [result] = await pool.query("SELECT  FROM courses WHERE id = ?",
            [id]
        );
		res.json(result);
	} catch (err) {
		console.log("Unable to fetch data", err);
		res.status(500).json({ error: "Fetching failed" });
	}
}

// ----------------------- Delete Course -----------------------
export async function deleteStudent(req, res) {
	try {
		const id = req.params.id;

		const [result] = await pool.query(
			"DELETE FROM courses WHERE id = ?",
			[id]
		);

		if (result.affectedRows === 0) {
			return res.status(404).json({ message: "Course not found" });
		}

		res.json({ message: "Deletion Successful" });
	} catch (err) {
		console.log("Unable to delete data", err);
		res.status(500).json({ error: "Deletion failed" });
	}
}

// ----------------------- Insert Course -----------------------
export async function createCourse(req, res) {
	try {
		const { id, name, description, duration } = req.body;

		const [result] = await pool.query(
			"INSERT INTO courses (id, name, description, duration) VALUES (?, ?, ?, ?)",
			[id, name, description, duration]
		);

		res.json({ message: "Insertion Successful", data: result });
	} catch (err) {
		console.log("Unable to insert data", err);
		res.status(500).json({ error: "Insertion failed" });
	}
}

