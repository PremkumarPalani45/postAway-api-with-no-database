
import userModel from "../user/user.model.js";
import postModel from "./post.model.js"



export default class postController{
  

    getAllposts(req,res){
        try{
        const posts=postModel.getAll();
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

    getPostbyID(req,res){
        const id=req.params.id;
console.log(id);
        try{
           const post=postModel.getbyID(id);

           return res.status(200).send(post);
        }
         catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }

    }
     deletePostbyID(req,res){
        const id=req.params.id;
console.log(id);
        try{
           const post=postModel.deleteByID(id);
        if(post){
            return res.status(200).send(post);
        }
           return res.status(200).send("deleted successfully");
        }
       catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }

    }

    addpost(req,res){
     const {title,caption}=req.body;
     const userid=req.userID;
     const imageURL= req.file?`/uploads/${req.file.filename}`: null;
      try{
     const add=postModel.add(title,caption,imageURL,userid);
      res.status(201).json(add);
}
        catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
    }

    updatePost(req,res){
          const id=req.params.id;
         const {title,caption}=req.body;
         const image=req.file;
 try{
        
    
     const update=postModel.update(id,title,caption,image);
     if(update=="post not found"){
return res.status(404).json({ message: 'Post not found' });
     }
     else{
        res.status(200).json({
    message: 'Post updated successfully'})
     }
}
        catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
    }

    getbyUserid(req,res){
      const{email,password}=req.body;
    try{
      const post=postModel.getpostByuser(email,password)

      if(post){
         return res.status(200).send(post);
      }
      else{
         return res.status(400).send("user not found")
      }
   }
    catch(err){
            console.log(err);
            throw new applicationError("something went wrong",500)
         }
    }

    filterpost(req,res){
      try{
    
     const caption=req.query.caption;
   
     const result= postModel.filter(caption);
     console.log(result);
     res.status(200).send(result);
  }
  catch(err){
    console.log(err);
    throw new ApplicationError("something went wrong",500)
  }
}
    }


