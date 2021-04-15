const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const bookSchema= new Schema({
    title:{
        type: String,
        required : true
    },
    author:{
        type: String,
        required : true
    },
    price:{
        type: String,
        required : true
    },
    rating:{
        type: String, 
        required : true
    }
},{timestamps:true});//passing a constructor here


const Book= mongoose.model('books',bookSchema);
//books is Collection
module.exports=Book;