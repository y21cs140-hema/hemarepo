import express from 'express';
import { registeruser } from '../controllers/user.controller.js';
import { getAllUsers } from '../controllers/user.controller.js';
const router = express.Router();
router.get('/login', (req,res) => {
    res.json({
        message: 'Login route'});
});
router.post('/register', registeruser); // Ensure the register route is defined

//http://localhost:8980/api/v1/1234
router.get('/profile/:uid',(req,res)=>{
    const userId = req.params.userId;
    res.json({ userId: userId, message: 'User profile route'    

    });
});

//http://localhost:8980/api/v1/profile?role=admin&uid=12345&cat=electronics
router.get('/profile', (req, res) => {
    const role = req.query.role;
    const userId= req.query.uid;
    const cat = req.query.cat;
    res.json ({ role: role, userId: userId, cat: cat });
    res.json({ status: 'success', message: 'User profile route with query parameters' });
});

//http://localhost:8980/api/v1/profile/1234/details?projects=react,angular
router.get('/profile/:uid/details', (req, res) => {
    const userId = req.params.uid;
    const projects = req.query.projects;
    res.json({ userId: userId, projects: projects, status: 'success', message: 'User profile details route' });
});
export default router;