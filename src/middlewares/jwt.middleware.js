import jwt from 'jsonwebtoken';



export const jwtmiddleware=(req,res,next)=>{
const auth= req.headers['authorization']


if(!auth){
   return res.status(401).send("Unauthorized error")
}

try{
   const payload=jwt.verify(auth,"2dk2SHquPZp5PVMPOIw73jRvtonZ1nbp")

   console.log(payload);
  req.userID= payload.userid;
next();

}
catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(403).send("Forbidden: Invalid or expired token");
  }

}