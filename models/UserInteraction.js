import mongoose from 'mongoose';

const userInteractionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }, // Can be null if the interaction isn't related to a specific recipe
  interaction_type: { type: String, required: true }, // E.g., 'like', 'save', 'share'
  interaction_details: { type: mongoose.Schema.Types.Mixed }, // Stores JSON with interaction specifics
  created_at: { type: Date, default: Date.now }
});

const UserInteraction = mongoose.model('UserInteraction', userInteractionSchema);

export default UserInteraction;