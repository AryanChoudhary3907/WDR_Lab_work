import pool from './db.js';

// ----------------------- Fetch Students -----------------------
export async function fetchStudentsList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM student");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch data", err);
        res.status(500).json({ error: "Fetching failed" });
    }
}

// ----------------------- Delete Student -----------------------
export async function deleteStudent(req, res) {
    try {
        const id = req.params.id;

        const [result] = await pool.query(
            "DELETE FROM student WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Deletion Successful" });
    } catch (err) {
        console.log("Unable to delete data", err);
        res.status(500).json({ error: "Deletion failed" });
    }
}

// ----------------------- Insert Student -----------------------
export async function createStudent(req, res) {
    try {
        const { id, name, standard, age, rollno } = req.body;

        const [result] = await pool.query(
            "INSERT INTO student (id, name, standard, age, rollno) VALUES (?, ?, ?, ?, ?)",
            [id, name, standard, age, rollno]
        );

        res.json({ message: "Insertion Successful", data: result });
    } catch (err) {
        console.log("Unable to insert data", err);
        res.status(500).json({ error: "Insertion failed" });
    }
}

// ----------------------- Update Student -----------------------
export async function updateStudent(req, res) {
    try {
        const id = req.params.id;
        const { name, standard, age, rollno } = req.body;

        const [result] = await pool.query(
            "UPDATE student SET name = ?, standard = ?, age = ?, rollno = ? WHERE id = ?",
            [name, standard, age, rollno, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Updation Successful" });
    } catch (err) {
        console.log("Unable to update data", err);
        res.status(500).json({ error: "Updation failed" });
    }
}
