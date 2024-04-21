import express from 'express';
import userController from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/create', userController.createUser);
userRouter.get('/login', userController.login);
userRouter.get('/users/:id', userController.getUsers);

// Add more routes as needed

export default userRouter;
