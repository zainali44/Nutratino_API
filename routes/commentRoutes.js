import express from 'express';
const router = express.Router();
import commentController from
    '../controllers/commentController.js';

router.post('/comments', commentController.createComment);
router.get('/comments/recipe/:recipeId', commentController.getCommentsByRecipe);

// Additional routes for updating and deleting comments

export default router;