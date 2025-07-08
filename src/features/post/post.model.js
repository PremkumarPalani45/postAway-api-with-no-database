
import { posts } from "../../shared/datafile.js";
import userModel from "../user/user.model.js";
import { users } from "../user/user.model.js";

export default class postModel{
  constructor(id,title,caption,comments,likes,image_url,created_by){
    this.id=id;
       this.title=title;
       this.caption=caption;
       this.comments=comments;
       this.likes=likes;
       this.image_url=image_url;
       this.created_by=created_by;
   }

    static getAll(){
        return posts;    }

        static getbyID(id){
            const post=posts.find(p=>p.id==id)
            console.log(post);
            if(post){
                return post;
            }
            else{
                return 'user not found'
            }
        }

        static deleteByID(id){
            const index=posts.findIndex(p=>p.id==id)
           console.log(index);
            if(index !==-1){
                posts.splice(index,1)
            }
            else{
                return 'id not found'
            }
        }

        static add(title,caption,image_url,userid){

               const post={
                id:posts.length+1,
                title,
                caption,
                comments: [],
                likes: 0,
                image_url,
                created_by: userid
               }

               posts.push(post);

               return post;

        }

        static update(id,title,caption,image_url){
             const index=posts.findIndex(p=>p.id==id)
           console.log(index);
            if(index ==-1){
               return 'post not found'
            }

            if(title){
                posts[index].title=title;
            }
            if(caption){
                posts[index].caption=caption;
            }
            if(image_url){
                const imageURL=image_url?`/uploads/${image_url.filename}`:null;
                posts[index].image_url=imageURL;
            }
            return 'updated successfully';

        }

        static getpostByuser(email,password){
            const user=users.find(u=>u.email==email&&u.password==password)

            if(!user){
                return [];

            }
            const post=posts.filter(p=>p.created_by==user.id);

            return post;
        }

       static filter(caption){
     
      const result=posts.filter((p)=> {
       return(
          (!caption || p.caption==caption)
       );
      
    })

}
}