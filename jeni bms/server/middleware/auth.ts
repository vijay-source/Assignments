import config from "config";
import jwt from "jsonwebtoken";
import User from "../user";

//Purpose of this function is to get the token from react or postman
//Or any front end that we are using,it will send along a token that will be in header
function authentication(req:any,res:any,next:any){
  
    const token=req.header('x-auth-token');

   try{
     //Check for token
  console.log("req.body from auth.ts",req.body);

     if(!token){
        //401 status mean user is unauthorized
        res.status(401).json({msg:"NO token authorization access denied"})
    }
    //Verify token
    const decoded=jwt.verify(token,config.get('jwtSecret'));

    //We now have to take the user from the token(id in the token which is the payload)
    //Add user from the payload
    console.log("decoded from auth",decoded);
    
    // let user=User.findById(decoded)
    // if(!user){
    //   return res.status(403).json({msg:"USER NOT FOUND!"})
    // }
    req.user=decoded;
    console.log("req.user auth",req.user);
    
    next();
   }catch(err){
    res.status(400).json({msg:"Token is not valid"});
   }
}
module.exports=authentication;