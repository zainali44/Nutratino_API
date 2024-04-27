import express from 'express';
const router = express.Router();
import preferenceController from
    '../controllers/preferenceController';

router.post('/preferences', preferenceController.createPreference);
router.get('/preferences/user/:userId', preferenceController.getPreferenceByUser);

// Add more routes as needed

export default router;
