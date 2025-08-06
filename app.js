import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js'; // Corrected import path
import { db } from './config/db.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v1/user', userRoutes); // Ensure user routes are included
export default app; // Ensure the app instance is exported correctly