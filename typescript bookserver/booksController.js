var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Book = require('./booksmodel');
//details of all books "/books"
function getBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var books, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Book.findAll()];
                case 1:
                    books = _a.sent();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(books));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//searching by id "/books/1"
function searchById(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Book.findById(id)];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Book does not exist' }));
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(book));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// search by author
function searchByAuthor(req, res, author) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Book.findByAuthor(author)];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Book does not exist' }));
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(book));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//add new book
function addBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body_1;
        var _this = this;
        return __generator(this, function (_a) {
            try {
                body_1 = '';
                req.on('data', function (chunk) {
                    body_1 += chunk.toString();
                });
                req.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, title, author, price, rating, book, newBook;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = JSON.parse(body_1), title = _a.title, author = _a.author, price = _a.price, rating = _a.rating;
                                book = {
                                    title: title,
                                    author: author,
                                    price: price,
                                    rating: rating
                                };
                                return [4 /*yield*/, Book.create(book)];
                            case 1:
                                newBook = _b.sent();
                                res.writeHead(201, { 'Content-Type': 'application/json' });
                                return [2 /*return*/, res.end(JSON.stringify(newBook))];
                        }
                    });
                }); });
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    });
}
//update book
function updateBook(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var book_1, body_2, error_4;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Book.findById(id)];
                case 1:
                    book_1 = _a.sent();
                    if (!book_1) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Book does not exist' }));
                    }
                    else {
                        body_2 = '';
                        req.on('data', function (chunk) {
                            body_2 += chunk.toString();
                        });
                        req.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, title, author, price, rating, bookData, updateBook;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = JSON.parse(body_2), title = _a.title, author = _a.author, price = _a.price, rating = _a.rating;
                                        bookData = {
                                            title: title || book_1.title,
                                            author: author || book_1.author,
                                            price: price || book_1.price,
                                            rating: rating || book_1.rating
                                        };
                                        return [4 /*yield*/, Book.update(id, bookData)];
                                    case 1:
                                        updateBook = _b.sent();
                                        res.writeHead(200, { 'Content-Type': 'application/json' });
                                        return [2 /*return*/, res.end(JSON.stringify(updateBook))];
                                }
                            });
                        }); });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//delete a book by id
function deleteBook(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, Book.findById(id)];
                case 1:
                    book = _a.sent();
                    if (!!book) return [3 /*break*/, 2];
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Book does not exist' }));
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, Book.deleted(id)];
                case 3:
                    _a.sent();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: "book with " + id + " has been removed" }));
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    getBooks: getBooks,
    searchById: searchById,
    searchByAuthor: searchByAuthor,
    addBook: addBook,
    updateBook: updateBook,
    deleteBook: deleteBook
};
