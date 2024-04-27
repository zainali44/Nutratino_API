import mongoose from 'mongoose';

const nutritionHistorySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  bmi: Number
});

const NutritionHistory = mongoose.model('NutritionHistory', nutritionHistorySchema);

export default NutritionHistory;
