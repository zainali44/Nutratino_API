import UserInteraction from '../models/UserInteraction.js';

const createUserInteraction = async (req, res) => {
  try {
    const interaction = new UserInteraction({
      user_id: req.body.user_id,
      recipe_id: req.body.recipe_id,
      interaction_type: req.body.interaction_type,
      interaction_details: req.body.interaction_details
    });
    await interaction.save();
    res.status(201).send(interaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserInteractions = async (req, res) => {
  try {
    const interactions = await UserInteraction.find({ user_id: req.params.userId });
    if (!interactions.length) {
      return res.status(404).send('No interactions found for this user.');
    }
    res.send(interactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Additional methods for updating or deleting interactions

export default { createUserInteraction, getUserInteractions };