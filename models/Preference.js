import mongoose from 'mongoose';

const preferenceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dietary_preferences: [String], // Assuming these can be an array of strings
  meal_categories: [String]      // Assuming these can be an array of strings
});

const Preference = mongoose.model('Preference', preferenceSchema);

export default Preference;
