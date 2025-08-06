import express from 'express';
const router = express.Router();
router.get('/profile', (req, res) => {
    res.json({status : 'success', message: 'User profile route with query parameters'})
});
export default router; // Ensure the router is exported correctly