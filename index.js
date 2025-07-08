import express from 'express';
import swaggerUi from 'swagger-ui-express'
import userRouter from './src/features/user/user.route.js';
import postRouter from './src/features/post/post.route.js';
import { jwtmiddleware } from './src/middlewares/jwt.middleware.js';
import commentRouter from './src/features/comment/comment.route.js';
import likeRouter from './src/features/like/like.route.js';
import { applicationError } from './src/features/error-handling/applicationError.js';
import winstonlogger from './src/middlewares/logger.middleware.js';
import fs, { readFileSync } from "fs"

const server=express();

const apiDocs = JSON.parse(fs.readFileSync('./swagger.json', 'utf-8'));

server.use(express.json());


server.use(winstonlogger);
server.use('/uploads', express.static('uploads'));
server.use("/api-docs",swaggerUi.serve,swaggerUi.setup(apiDocs))
server.use('/api/posts',jwtmiddleware,postRouter)
server.use('/api/comments',jwtmiddleware,commentRouter)
server.use('/api/likes',jwtmiddleware,likeRouter)
server.use('/api/user',userRouter)
server.get('/', (req, res) => {
  res.send('Hello API Server');
});

server.use((err, req, res, next) => {
  if (err instanceof applicationError) {
    return res.status(err.code).send(err.message);  // add return here
  }
  res.status(500).send('something went wrong');
});

server.use((req,res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:3700/api-docs")
})


server.listen(3700,()=>{
    console.log("server is listening at 3700")
})