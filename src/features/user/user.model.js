
export const users=[
    {
        id:1,
       name:'AdminUser',
       email:'admin@gmail.com',
       password:'Admin1',

    },
    {
        id:2,
        name:'customer1',
        email:'customer1@gmail.com',
        password:'customer1',
      
    },
]

export default class userModel{

   constructor(id,name,email,password){
    this.id=id;
       this.name=name;
       this.email=email;
       this.password=password;
   }


   static signup(name,email,password){

    const newuser= new userModel(users.length+1,name,email,password);

    users.push(newuser);
    return newuser;


   }
   static signin(email,password){
const auth=users.find((u)=>u.email==email && u.password==password)
       return auth;
    // }
   }

    static getAll(){
        return users;
    }

}
