import express from "express";
import * as dotenv from "dotenv";
import config from "config";
dotenv.config({ path: __dirname+'/.env' });
var cors = require('cors');
const app=express();
const mongoose= require('mongoose');
const books= require('./routes/books')

const dbURI=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.r2jbq.mongodb.net/test1?retryWrites=true&w=majority`;
app.use(cors());
app.use(express.json());


const accountSid = process.env.TWILIO_SID ;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.post("/sendOTP", (req: any, res: any) => {
    // console.log("REQ BODY",req.body);

    const phone:any = req.body.phonenumber;
    const OTP = Math.floor(100000 + Math.random() * 900000);
    const time = 2 * 60 * 1000;
    const expiry = Date.now() + time;
    const data = `${phone}.${OTP}.${expiry}`;
    
    client.messages
      .create({
        body: `Your OTP for successful login at Book Management System ${OTP}`,
        from: "+17068102126",
        to: phone,
      })
      .then((message: any) => console.log(message.sid, "......"))
      .catch((error: any) => console.error(error));
  
    res.status(200).send({ phone, OTP });
  });
  


const port =3000;

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((_result: any)=>{
  app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
});
  console.log('Connected Successfully to DataBase')}
  )
.catch((err: any)=>console.log(err));
app.use("/books",books);

