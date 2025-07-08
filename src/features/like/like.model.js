import { posts } from "../../shared/datafile.js";

export const likes=[];


export default class likeModel{
  constructor(id,userid,postid){
     this.id=id;
       this.userid=userid;
       this.postid=postid;
      
   }


   static getAllLikes(postid){
       const post=posts.find(p=>p.id==postid)

       return post;
   }

   static likesdislike(userid,postid){
     
    const post = posts.find(p => p.id === postid);
  if (!post) {
    return 'Post not found';
  }
  if (likeIndex !== -1) {
    // 👎 UNLIKE: Remove like entry and decrement count
    likes.splice(likeIndex, 1);
    posts.likes = Math.max(0, posts.likes - 1); // Ensure it doesn't go below 0

    return 'Post unliked successfully';
     
  } else {
    // 👍 LIKE: Add like entry and increment count
    const newLike = {
      id: likes.length + 1,
      postid: postid,
      userid: userid
    };
    likes.push(newLike);
    posts.likes += 1;

    return   'Post liked successfully';
    
  }
   }

   
}