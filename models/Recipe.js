import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  recipe_name: { type: String, required: true },
  ingredients: [{ ingredient: String, amount: String }],
  instructions: { type: String, required: true },
  portion_size: Number,
  serving_size: Number,
  calories: Number,
  macros: {
    protein: Number,
    carbs: Number,
    fat: Number
  },
  dietary_category: String,
  cuisine: String,
  cooking_time: Number,
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  bmi_category: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
