import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment_text: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
