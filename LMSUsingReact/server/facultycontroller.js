import pool from './db.js';

// ----------------------- Fetch Faculty -----------------------
export async function fetchFacultyList(req, res) {
	try {
		const [result] = await pool.query("SELECT * FROM faculty");
		res.json(result);
	} catch (err) {
		console.log("Unable to fetch data", err);
		res.status(500).json({ error: "Fetching failed" });
	}
}

// ----------------------- Delete Faculty -----------------------
export async function deleteFaculty(req, res) {
	try {
		const id = req.params.id;

		const [result] = await pool.query(
			"DELETE FROM faculty WHERE id = ?",
			[id]
		);

		if (result.affectedRows === 0) {
			return res.status(404).json({ message: "Faculty not found" });
		}

		res.json({ message: "Deletion Successful" });
	} catch (err) {
		console.log("Unable to delete data", err);
		res.status(500).json({ error: "Deletion failed" });
	}
}

// ----------------------- Insert Faculty -----------------------
export async function createFaculty(req, res) {
	try {
		const { id, name, age, qualification, joinedAt,status } = req.body;

		const [result] = await pool.query(
			"INSERT INTO faculty (id, name, standard, age, rollno) VALUES (?, ?, ?, ?, ?, ?)",
			[id, name, age, qualification, joinedAt, status ]
		);

		res.json({ message: "Insertion Successful", data: result });
	} catch (err) {
		console.log("Unable to insert data", err);
		res.status(500).json({ error: "Insertion failed" });
	}
}

// ----------------------- Faculty Details -----------------------
export async function FacultyDetails(req, res) {
	try {
		const [result] = await pool.query("SELECT  FROM faculty WHERE id = ?",
            [id]
        );
		res.json(result);
	} catch (err) {
		console.log("Unable to fetch data", err);
		res.status(500).json({ error: "Fetching failed" });
	}
}
