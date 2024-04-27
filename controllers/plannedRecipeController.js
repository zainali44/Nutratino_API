import PlannedRecipe from
'../models/PlannedRecipe.js';

const createPlannedRecipe = async (req, res) => {
  try {
    const plannedRecipe = new PlannedRecipe(req.body);
    await plannedRecipe.save();
    res.status(201).send(plannedRecipe);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPlannedRecipe = async (req, res) => {
  try {
    const plannedRecipe = await PlannedRecipe.findById(req.params.id).populate('meal_plan_id').populate('recipe_id');
    if (!plannedRecipe) {
      return res.status(404).send();
    }
    res.send(plannedRecipe);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { createPlannedRecipe, getPlannedRecipe };
// Additional methods for updating, deleting, and listing planned recipes
