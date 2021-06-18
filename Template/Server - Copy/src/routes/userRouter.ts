import express, { response } from "express";
//import question from "../model/question";
import answer from "../model/answer";
import question from "../model/question";
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

// userRouter.get("/:userid")
userRouter.post ("/registration", async (req, res) => {
  let { name,username, email, password, } = req.body;
  console.log("recieved data for registration");
  
  // validation
  if (!name || !username || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }
  let newUser:any;
  User.findOne({ username }).then((user: any) => {
    if (user) 
    {
        console.log(user)
        return res.status(400).json({ msg: "user already exists" });
    }
     newUser =  new User({
      name,
      username,
      email,
      password,
    });
    //create salt and hash
    console.log(newUser)
   const salt= bcrypt.genSalt(10, (err: any, salt: any) => {
    bcrypt.hash(newUser.password, salt, (err: any, hash: any) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user: any) => {
            res.send(user);
        });
      });
    });
  });
});

//for login
  userRouter.post("/login", async (req, res) => {
  const {username, password } = req.body;
  console.log("myrequest",req.body);
  console.log("username",username)
  console.log("user password",password)

  if (!username || !password) {
    return res.status(400).json({ msg: "credential missing" });
  }
  User.findOne({ username })
  .then((user: any) => {
    console.log("my user waiting",user)
    if (!user) return res.status(400).json({ msg: "user doesnot exists" });
    //validate password
    bcrypt.compare(password, user.password).then((isMatch: any) => {
      if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });
      jwt.sign({ id: user._id}, `${ process.env.jwtSecret}`, { expiresIn:999999999999999},
        (err: any, token: any) => {
          if (err) throw err;
          res.json({token:token,id:user._id,name:user.name})
        }
      );
    });
  });
});

export function  auth (req:any,res:any,next:Function){
    console.log("auth")
    const authHeader=req.headers.authorization;
    console.log("verifying",authHeader)
    console.log("header",req.headers)
    const token=authHeader
    console.log(token)
    //check for token
    if(!token) return res.status(401).json({ msg: "no token supplied" });
    jwt.verify(token,`${ process.env.jwtSecret}`,(err:any , user:any)=>{
      console.log('error',err)
        if(err)
        return res.status(403).send("something went wrong")
        req.user=user
        next()
    })
}
export default userRouter;


