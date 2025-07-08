import { applicationError } from "../error-handling/applicationError.js";
import userModel from "./user.model.js";
import jwt from 'jsonwebtoken'

export default class userController{
  
   usersignup(req,res){
      try{
const {name,email,password}=req.body;
     const user= userModel.signup(name,email,password);
     if(user){
      res.status(201).json({name:name,email:email})
     }

      }
      catch(err){
         console.log(err);
         throw new applicationError("something went wrong",500)
      }
   }
   usersignin(req,res){

      const {email,password}=req.body;
    try{
      const user=userModel.signin(email,password);
      if(!user){
        return res.status(400).send("user not found");


      }

else{
    const token=jwt.sign({userid:user.id,email:user.email},"2dk2SHquPZp5PVMPOIw73jRvtonZ1nbp",{expiresIn:"1h"})
  

    return res.status(200).json({ token });
}
    }
 catch(err){
         console.log(err);
         throw new applicationError("something went wrong",500)
      }
}


getAllusers(req,res){
   try{
   const users=userModel.getAll();
   res.status(200).send(users);
   }
    catch(err){
         console.log(err);
         throw new applicationError("something went wrong",500)
      }
}
}