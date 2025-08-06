import { db } from '../config/db.js'; // Corrected import pa
export const createuser = async (username,password,email,gender) => {

    const query = 'INSERT INTO sampl_id (username, password, email,gender) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(query, [username, password, email,gender]);
    return result.insertId; // Return the ID of the newly created user
}
export const findUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM sampl_id WHERE email = ?', [email]);
    return rows[0];
}