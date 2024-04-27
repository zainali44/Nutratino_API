import mongoose from 'mongoose';

const mealPlanSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  health_goal: String ,
  meal: {
    type: Map,
    of: String
  } // Optional field for health goals
  
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

export default MealPlan;