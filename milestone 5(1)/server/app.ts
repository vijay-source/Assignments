
import * as dotenv from "dotenv";
dotenv. config({path:__dirname+"/.env"})
import express from "express";
import cors from 'cors';   // use this in order to send req multiple servers
import bookroute from "./routes/bookroutes"
import userroute from "./routes/userroutes"
const port =5000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);


const app=express();
// app is my server
// where we give all operations




app.use(cors())          // to accept req from multiple origins
app.use(express.json()); 

const mongoose= require('mongoose'); // package helps to comm with mongodb
const dbURI=`mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.s3eeb.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})


.then((_result: any)=>
{app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
    console.log('Connected Successfully to DataBase')
});})
.catch((err: any)=>console.log(err));


//OTP generation
    app.post("/sendOTP", (req: any, res: any) => {
    const phone:any = req.body.phonenumber;
    const OTP = Math.floor(100000 + Math.random() * 900000);
    const time = 2 * 60 * 1000;
    const expiry = Date.now() + time;
    // const data = `${phone}.${OTP}.${expiry}`;
  
    client.messages
      .create({
        body: `Your OTP for successful login at Book Management System ${OTP}`,
        from: "+19724356208",
        to: phone,
      })
      .then((message: any) => console.log(message.sid, "......"))
      .catch((error: any) => console.error(error));
       res.status(200).send({ phone, OTP });
  });
  
 //  to parse request object  
app.use('/',bookroute)      // server should serve user routes
app.use('/',userroute)








// function middleWre(req:any,res:any,next:any){
// console.log("my middleware")
// next()
// }
// app.use(middleWre)











