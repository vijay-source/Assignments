"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
var express_1 = __importDefault(require("express"));
var Book = require('./book');
var route = express_1.default.Router();
exports.route = route;
route.get("/books", function (req, res) {
    Book.find()
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
route.get("/books/:id", function (req, res) {
    var id = req.params.id;
    //Book.findById('60768abb5d8c4f437c22a18b')
    Book.findById(id)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
route.delete("/books/:id", function (req, res) {
    var id = req.params.id;
    Book.deleteOne({ _id: id })
        .then(function () {
        res.status(200).json({
            message: 'Books deleted'
        });
    })
        .catch(function (error) { return console.log(error); });
});
route.post('/books', function (req, res) {
    var book = new Book(req.body);
    book.save();
    res.send(book);
});
route.put('/books/:id', function (req, res) {
    var book = new Book({
        _id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        rating: req.body.rating,
    });
    Book.update({ _id: req.params.id }, book)
        .then(function () {
        res.status(201).json({
            message: 'Book updated successfully'
        });
    }).catch(function (error) { return console.log(error); });
});
