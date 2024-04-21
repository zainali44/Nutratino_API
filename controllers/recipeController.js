import Recipe from '../models/recipe.js';

const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send();
    }
    res.send(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add more methods as needed (updateRecipe, deleteRecipe, listRecipes, etc.)

export default { createRecipe, getRecipe };