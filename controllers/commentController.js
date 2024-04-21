  import Comment from
  '../models/Comment.js';

const createComment = async (req, res) => {
  try {
    const comment = new Comment({
      recipe_id: req.body.recipe_id,
      user_id: req.body.user_id,
      comment_text: req.body.comment_text
    });
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCommentsByRecipe = async (req, res) => {
  try {
    const comments = await Comment.find({ recipe_id: req.params.recipeId }).populate('user_id', 'first_name last_name');
    if (!comments.length) {
      return res.status(404).send('No comments found for this recipe.');
    }
    res.send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Additional methods for updating or deleting comments

export default { createComment, getCommentsByRecipe };