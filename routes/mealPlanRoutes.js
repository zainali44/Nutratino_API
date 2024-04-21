import express from 'express';
const router = express.Router();
import mealPlanController from
    '../controllers/mealPlanController.js';

router.post('/createplan', mealPlanController.createMealPlan);
router.get('/mealplans/:id', mealPlanController.getMealPlan);

// Additional routes can be added for updating and listing all meal plans

export default router;
