import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
let db;
try {
    db = await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true, // Ensure proper connection handling
        connectionLimit: 10, // Limit the number of connections
        queueLimit: 0, // Unlimited queue for connection requests
    });
    db.getConnection(); // Test the connection
    console.log('Database connection established successfully');
} catch (error) {
    console.error('Error connecting to the database:', error);
}
export { db };