import NutritionHistory from
'../models/NutritionHistory.js';

const createNutritionHistoryEntry = async (req, res) => {
  try {
    const entry = new NutritionHistory({
      user_id: req.body.user_id,
      date: req.body.date,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      bmi: req.body.bmi
    });
    await entry.save();
    res.status(201).send(entry);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getNutritionHistory = async (req, res) => {
  try {
    const history = await NutritionHistory.find({ user_id: req.params.userId });
    if (!history.length) {
      return res.status(404).send('No nutritional data found for this user.');
    }
    res.send(history);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { createNutritionHistoryEntry, getNutritionHistory };

// Additional methods can be implemented to update or delete nutrition entries
