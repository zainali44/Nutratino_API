import User from '../models/User.js';

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// login 
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  }
  catch (error) {
    res.status(500
    ).send
    (error);
  }
}

// Add more methods as needed (updateUser, deleteUser, etc.)
export default {
  createUser,
  getUsers,
  login
};