"use strict";
exports.__esModule = true;
var http = require("http");
var _a = require('./booksController'), getBooks = _a.getBooks, searchById = _a.searchById, addBook = _a.addBook, updateBook = _a.updateBook, deleteBook = _a.deleteBook, searchByAuthor = _a.searchByAuthor;
var server = http.createServer(function (req, res) {
    if (req.url === '/books' && req.method === 'GET') {
        getBooks(req, res);
    }
    else if (req.url.match(/\/books\/([0-9]+)/) && req.method == 'GET') {
        var id = req.url.split('/')[2];
        searchById(req, res, id);
    }
    else if (req.url.match(/\/books\/([A-z]+[A-z]+)/) && req.method == 'GET') {
        var author = req.url.split('/')[2];
        console.log(author);
        searchByAuthor(req, res, author);
    }
    else if (req.url === '/books' && req.method === 'POST') {
        addBook(req, res);
    }
    else if (req.url.match(/\/books\/([0-9]+)/) && req.method == 'PUT') {
        var id = req.url.split('/')[2];
        updateBook(req, res, id);
    }
    else if (req.url.match(/\/books\/([0-9]+)/) && req.method == 'DELETE') {
        var id = req.url.split('/')[2];
        deleteBook(req, res, id);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});
var port = process.env.port || 8070;
server.listen(port, function () { return console.log("server running on port " + port); });
