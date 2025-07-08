import likeModel from "./like.model.js";

export default class likeController{
  
   getAllLikes(req,res){
     const postid=req.params.id;

    try{
     const likes=likeModel.getAllLikes(postid);

     if(likes){
      res.status(200).json({postname:likes.title,likes:likes.likes})
     }
     else{
      return res.status(400).send('likes not found')
     }
   }
    catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }

   }
 togglelikestatus(req,res){
 const postid=req.params.id;
 const userid=req.userID;
try{
 const togglelike=likeModel.likesdislike(userid,postid);

 if(togglelike=='Post not found'){
   return res.status(400).send(togglelike);

 }
 else{
   res.status(200).send(togglelike);
 }
   }
    catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
}
}
