import express from 'express';
const router = express.Router();
import plannedRecipeController from
    '../controllers/plannedRecipeController.js';

router.post('/plannedrecipes', plannedRecipeController.createPlannedRecipe);
router.get('/plannedrecipes/:id', plannedRecipeController.getPlannedRecipe);

// Additional routes for updating and deleting planned recipes

export default router;
