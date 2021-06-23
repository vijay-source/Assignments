"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bookSchema = new Schema({
    /* id:mongoose.Schema.Types.ObjectId, */
    title: String,
    author: String,
    price: String,
    rating: String,
    description: String,
    cover: String,
    reviews: [{
            userId: { type: String },
            name: { type: String },
            review: { type: String },
            rating: { type: String },
        }],
});
var Book = mongoose.model("books", bookSchema);
module.exports = Book;
