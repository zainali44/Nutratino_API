import express from 'express';
const router = express.Router();
import userInteractionController from'../controllers/userInteractionController.js';

router.post('/create', userInteractionController.createUserInteraction);
router.get('/userinteractions/user/:userId', userInteractionController.getUserInteractions);

// Additional routes for updating and deleting interactions

export default router;
