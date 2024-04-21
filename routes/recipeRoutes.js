import express from 'express';
const router = express.Router();
import recipeController from
    '../controllers/recipeController.js';

router.post('/create', recipeController.createRecipe);
router.get('/recipes/:id', recipeController.getRecipe);

// Add more routes as needed for updating, deleting, and listing recipes

export default router;
