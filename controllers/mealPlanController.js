import MealPlan from
  '../models/MealPlan.js';

const createMealPlan = async (req, res) => {
  try {
    const mealPlan = new MealPlan({
      user_id: req.body.user_id,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      health_goal: req.body.health_goal
    });
    await mealPlan.save();
    res.status(201).send(mealPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id);
    if (!mealPlan) {
      return res.status(404).send();
    }
    res.send(mealPlan);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { createMealPlan, getMealPlan };
// Additional methods can be added to update and delete meal plans
