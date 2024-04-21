import Preference from '../models/Preference.js';

const createPreference = async (req, res) => {
  try {
    const preference = new Preference({
      user_id: req.body.user_id,
      dietary_preferences: req.body.dietary_preferences,
      meal_categories: req.body.meal_categories
    });
    await preference.save();
    res.status(201).send(preference);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPreference = async (req, res) => {
  try {
    const preferences = await Preference.findOne({ user_id: req.params.userId });
    if (!preferences) {
      return res.status(404).send();
    }
    res.send(preferences);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add more methods as needed (updatePreference, deletePreference, etc.)

export default { createPreference, getPreference };