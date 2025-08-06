import bcrypt from 'bcryptjs';
import { createuser } from '../models/user.model.js';
import { findUserByEmail } from '../models/user.model.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
export const registeruser = async (req, res) => {
    try {
        const { username,password,email,gender} = req.body;
        const existing = await findUserByEmail(email);
        if (existing) {
            return res.status(400).json({ status: 'error', message: 'User already exists' });
        }   
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId  =  await createuser (username,hashedPassword,email,gender);
        res.status(201).json({status:'success', message: 'user registers successfully',userId: userId});
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM sampl_id');
        res.status(200).json({ status: 'success', users: rows });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
}
export const getUserProfile = async (req, res) => {
    const userId = req.params.uid;
    try {
        const [rows] = await db.query('SELECT * FROM sampl_id WHERE id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.status(200).json({ status: 'success', user: rows[0] });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
}
export const getUserProfileDetails = async (req, res) => {
    const userId = req.params.uid;
    const projects = req.query.projects;
    try {
        const [rows] = await db.query('SELECT * FROM sampl_id WHERE id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.status(200).json({ status: 'success', user: rows[0], projects: projects });
    } catch (error) {
        console.error('Error fetching user profile details:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
}
export const getUserProfileWithQuery = (req, res) => {
    const role = req.query.role;
    const userId = req.query.uid;
    const cat = req.query.cat;
    res.json({ status: 'success', role: role, userId: userId, cat: cat, message: 'User profile route with query parameters' });
}