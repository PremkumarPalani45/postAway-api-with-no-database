import express from 'express';
import userController from './user.controller.js';


const userRouter= express.Router();


const usercontroller= new userController();


userRouter.post('/signup',usercontroller.usersignup);


userRouter.post('/signin',usercontroller.usersignin);


userRouter.get('/',usercontroller.getAllusers);

export default userRouter;