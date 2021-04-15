
import * as dotenv from "dotenv";
dotenv. config({path:__dirname+"/.env"})
import express from "express";
import { route } from "./routes";

const port =3000;
const app=express();
const mongoose= require('mongoose'); // package helps to comm with mongodb
const Book= require('./book'); 


const dbURI=`mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.s3eeb.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((_result: any)=>
{app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
    console.log('Connected Successfully to DataBase')
});})

.catch((err: any)=>console.log(err));
app.use(express.json());
app.use('/',route)



// app.get("/books",(req,res)=>{
// Book.find()
//     .then((result: any)=>{
//         res.send(result);
//     })
//     .catch((error: Error)=>console.log(error))
// })




// app.get("/books/:id",(req,res)=>{
//     const id= req.params.id;
//     //Book.findById('60768abb5d8c4f437c22a18b')
//     Book.findById(id)
//     .then((result: any)=>{
//         res.send(result);
//     })
//     .catch((error: Error)=>console.log(error))
// })




// app.delete("/books/:id",(req,res)=>{
//    const id= req.params.id;
// Book.deleteOne({_id:id})
// .then(()=>{
//     res.status(200).json({
//         message:'Books deleted'
//     })
// })
// .catch((error:Error)=>console.log(error))
// })




// app.post('/books',(req,res)=>{
//     let book=new Book(req.body);
//     book.save();
//     res.send(book);
// });




// app.put('/books/:id',(req,res)=>{
//     const book=new Book({
//         _id:req.params.id,
//         title:req.body.title,
//         author:req.body.author,
//         price:req.body.price,
//         rating:req.body.rating,
//     });
//     Book.update({_id:req.params.id},book)
//     .then(()=>{
//         res.status(201).json({
//             message:'Book updated successfully'
//         })
//     }).catch((error:Error)=>console.log(error))
// })

