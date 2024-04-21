import express from 'express';
const router = express.Router();
import nutritionHistoryController from
    '../controllers/nutritionHistoryController.js';

router.post('/nutritionhistory', nutritionHistoryController.createNutritionHistoryEntry);
router.get('/nutritionhistory/user/:userId', nutritionHistoryController.getNutritionHistory);

// Additional routes for updating and deleting entries

export default router;
