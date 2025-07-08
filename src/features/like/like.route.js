import express from 'express';
import likeController from './like.controller.js';


const likeRouter= express.Router();


const likecontroller= new likeController();


likeRouter.get('/:postid',likecontroller.getAllLikes);


likeRouter.get('/toggle/:postid',likecontroller.togglelikestatus);




export default likeRouter;