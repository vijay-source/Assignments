const mongoose=require("mongoose")
const Schema=mongoose.Schema
const bookSchema=new Schema({
    /* id:mongoose.Schema.Types.ObjectId, */
    title:String,
    author:String,
    price:String,
    rating:String,
    description:String,
    cover:String,
    reviews:[{
        userId:{type:String},
        name:{type:String},
        review:{type:String},
        rating:{type:String},
    }],


})
 
const Book=mongoose.model("books",bookSchema)
module.exports=Book