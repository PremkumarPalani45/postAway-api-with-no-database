import express from 'express';
import postController from './post.controller.js';
import { upload } from '../../middlewares/fileupload.middleware.js';


const postRouter= express.Router();


const postcontroller= new postController();

postRouter.get('/',postcontroller.getbyUserid);

postRouter.get('/all',postcontroller.getAllposts);

postRouter.get('/:id',postcontroller.getPostbyID);

postRouter.delete('/:id',postcontroller.deletePostbyID);

postRouter.post('/add',upload.single('imageURL'),postcontroller.addpost);

postRouter.put('/:id',upload.single('imageURL'),postcontroller.updatePost)

postRouter.get('/filter',postcontroller.filterpost)






export default postRouter;