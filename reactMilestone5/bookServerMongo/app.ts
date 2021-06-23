import bodyParser from "body-parser"

import express from "express"
import cors from "cors"

var app=express()
const env=require('dotenv')
/* const path="../bookServerMongo/buildCopy" */
env.config()
const mongoose=require("mongoose")

import {router} from "./routes/bookRoutes"
import {routers} from "./routes/userRoutes"



const dburi=`mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@${process.env.mongodb_server}/bookManagementSystem?retryWrites=true&w=majority`
mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result:any)=>app.listen(port,()=> console.log(`server running on port ${port}`)))
    .catch((err:any)=>console.log(err))
const port=process.env.PORT 
app.use(cors())


app.use(express.json());
/* app.use(express.static(path)) */
app.use('/api/books',router)
app.use('/api/users',routers)
/* app.get("/*",(req,res)=>{
    res.sendFile(__dirname +"/buildCopy/index.html")
}) */









        
           
