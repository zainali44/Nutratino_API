import mongoose from 'mongoose';

const plannedRecipeSchema = new mongoose.Schema({
  meal_plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MealPlan', required: true },
  recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  meal_time: { // Details about when the meal is planned
    date: { type: Date, required: true },
    time: String // Optional, can specify meal time like 'breakfast', 'lunch', 'dinner'
  }
});

const PlannedRecipe = mongoose.model('PlannedRecipe', plannedRecipeSchema);

export default PlannedRecipe;
