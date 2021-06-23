const bcrypt = require("bcryptjs")
const User = require('../models/UserSchema')
const jwt = require("jsonwebtoken")


export const addUser = async (req: any, res: any) => {
    let { name, username, password } = req.body;
    console.log("recieved data for registration");
    // validation
    if (!name || !username || !password) {
      return res.status(400).json({ msg: "please enter all fields" });
    }
    let newUser: any;
    User.findOne({ username }).then((user: any) => {
      if (user) {
        console.log(user)
        return res.status(400).json({ msg: "user already exists" });
      }
      newUser = new User({
        name,
        username,
        password,
      });
      //create salt and hash
      console.log(newUser)
      bcrypt.genSalt(10, (err: any, salt: any) => {
        bcrypt.hash(newUser.password, salt, (err: any, hash: any) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user: any) => {
            res.send(user);
          });
        });
      });
    });
}
export const loginUser = async (req: any, res: any) => {
    const { username, password } = req.body;
  console.log("myrequest", req.body);
  console.log("user email", username)
  console.log("user password", password)

  if (!username || !password) {
    return res.status(400).json({ msg: "credential missing" });
  }
  User.findOne({ username }).then((user: any) => {
    if (!user) return res.status(400).json({ msg: "user doesnot exists" });
    //validate password
    bcrypt.compare(password, user.password).then((isMatch: any) => {
      if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });
      jwt.sign({ id: user._id }, "myJwtSecret", { expiresIn: 3600 },
        (err: any, token: any) => {
          if (err) throw err;
         // res.json(token)
         res.json({token:token,id:user._id,name:user.name})
        }
      );
    });
  });
}
export function authenticate(req: any, res: any, next: any) {
    const header = req.headers.authorization
    console.log("header", header)
    const token = header && header.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401)
    }
    jwt.verify(token, "myJwtSecret", (err: any, user: any) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json("session expired...Please login Again!")
        }
        return res.status(403).json("Something went wrong: " + err.message)
      }
      req.user = user;
      next();
    })
  }
  export const userDetails = async (req: any, res: any) => {
    await User.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: Error) => console.log(error))
  }
  