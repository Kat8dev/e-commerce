import express from 'express';
import userController from '../controllers/usersControllers.js';

const userRouter = express.Router();

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default userRouter;
