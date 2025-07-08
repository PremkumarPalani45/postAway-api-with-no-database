import express from 'express';
import commentController from './comment.controller.js';


const commentRouter= express.Router();


const commentcontroller= new commentController();


commentRouter.get('/:id',commentcontroller.getAllcomments);


commentRouter.post('/:id',commentcontroller.addComment);


commentRouter.delete('/:id',commentcontroller.deleteCommentID);


commentRouter.put('/:id',commentcontroller.updatecomment);

export default commentRouter;