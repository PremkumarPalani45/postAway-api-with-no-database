import { posts } from "../../shared/datafile.js";

export const comments=[];


export default class commentModel{
  constructor(id,userid,postid,content){
    this.id=id;
       this.userid=userid;
       this.postid=postid;
       this.content=content;
     
   }

   static getcommentsid(postid){
    const comment=comments.find(p=>p.id==postid);

    return comment;
   }

   static addComments(userid,postid,content){
    
    const post=posts.find(p=>p.id==postid);

    post.comments.push(content);

    const data={
      id:comments.length+1,
      userid:userid,
      postid:postid,
      content:content
    }

    comments.push(data);

    return data;

   }
   static deleteComment(userid,id){

    const comment=comments.find(c=>c.id==id&&c.userid==userid);
    const commentindex=comments.findIndex(c=>c.id==id&&c.userid==userid);
if(comment){
     posts.comments = posts.comments.filter(comment => comment !== comment.content);
}
else{
  return 'comment not found'
}
 if (commentindex !== -1) {
     comments.splice(commentindex,1)
     return 'deleted successfully';
 }

 

      
   }
   static updateComment(userid,id,comment){
 const commentsupdate=comments.find(c=>c.id==id&&c.userid==userid);

 if(commentsupdate){
 
const postcommentindex = posts[0].comments.indexOf(commentsupdate.content);

if (postcommentindex !== -1) {
  posts.comments[postcommentindex]= comment;
}
 commentsupdate.content=comment; 
 }

 else{
  return 'comment not found'
 }

   }
  }

   



