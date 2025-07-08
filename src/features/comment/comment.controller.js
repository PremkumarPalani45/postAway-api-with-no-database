import commentModel from "./comment.model.js";

export default class commentController{
  

    getAllcomments(req,res){
         const postid=req.params.id;

        try{
        const posts=commentModel.getcommentsid(postid);
if(posts){
        return res.status(200).send(posts);
}
else{
    return res.status(400).send("no posts found")
}
        }
 catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }

    }

    addComment(req,res){
        const postid=req.params.id;
        const {content}=req.body;
     const userid=req.userID;
        try{
const comment=commentModel.addComments(userid,postid,content)

if(comment){
    res.status(201).send("comment posted..")
}
        }
       catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
    }

    deleteCommentID(req,res){
       const id=req.params.id;
      const userid=req.userID;
    try{
      const deletecom=commentModel.deleteComment(userid,id);
     if(!deletecom=='comment not found'){
      res.status(200).send(deletecom);
    }
    else{
        res.status(200).send(deletecom)
    }
}
 catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
}
    updatecomment(req,res){
  const id=req.params.id;
      const userid=req.userID;
    try{
      const deletecom=commentModel.deleteComment(userid,id);
     if(!deletecom=='comment not found'){
      res.status(200).send(deletecom);
    }
    else{
        res.status(200).send(deletecom)
    }
}
 catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
    
    }

   
    

}
