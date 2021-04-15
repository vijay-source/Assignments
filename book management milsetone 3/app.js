"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/.env" });
var express_1 = __importDefault(require("express"));
var port = 3000;
var app = express_1.default();
var mongoose = require('mongoose'); // package helps to comm with mongodb
var Book = require('./book');
var dbURI = "mongodb+srv://" + process.env.db_user + ":" + process.env.db_password + "@cluster0.s3eeb.mongodb.net/" + process.env.db_name + "?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (_result) {
    app.listen(port, function () {
        console.log("Server Started at port " + port);
        console.log('Connected Successfully to DataBase');
    });
})
    .catch(function (err) { return console.log(err); });
app.use(express_1.default.json());
app.get("/books", function (req, res) {
    Book.find()
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
app.get("/books/:id", function (req, res) {
    var id = req.params.id;
    //Book.findById('60768abb5d8c4f437c22a18b')
    Book.findById(id)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
app.delete("/books/:id", function (req, res) {
    var id = req.params.id;
    Book.deleteOne({ _id: id })
        .then(function () {
        res.status(200).json({
            message: 'Books deleted'
        });
    })
        .catch(function (error) { return console.log(error); });
});
app.post('/books', function (req, res) {
    var book = new Book(req.body);
    book.save();
    res.send(book);
});
app.put('/books/:id', function (req, res) {
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
