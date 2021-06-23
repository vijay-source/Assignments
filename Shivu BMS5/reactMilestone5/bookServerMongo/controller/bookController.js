"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReview = exports.addReview = exports.getAllAuthors = exports.removeBook = exports.getBookById = exports.addBook = exports.getAllBooks = void 0;
var Book = require('../models/schema');
var getAllBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Book.find()];
            case 1:
                result = _a.sent();
                if (result)
                    res.status(200).send(result);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).send("ERROR", err_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllBooks = getAllBooks;
var addBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var book, newBook, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                book = new Book(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, book.save()];
            case 2:
                newBook = _a.sent();
                res.send(newBook);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addBook = addBook;
var getBookById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                console.log("getbookByIdRoute", id);
                return [4 /*yield*/, Book.findById(id)
                        .then(function (result) {
                        res.send(result);
                    })
                        .catch(function (error) { return console.log(error); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getBookById = getBookById;
var removeBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Book.deleteOne({ _id: id })
                        .then(function () {
                        res.status(200).json({
                            message: 'Books deleted'
                        });
                    })
                        .catch(function (error) { return console.log(error); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeBook = removeBook;
var getAllAuthors = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Book.distinct("author")];
            case 1:
                books = _a.sent();
                res.status(200).send(books);
                console.log("my authors list", books);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.send(400).send("something went wrong");
                console.log(err_3, "error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllAuthors = getAllAuthors;
var addReview = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, name_1, review, bookId, rating, book, reviews, updatedBook, newbook, newreviews, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, userId = _a.userId, name_1 = _a.name, review = _a.review, bookId = _a.bookId, rating = _a.rating;
                console.log("userId", userId);
                return [4 /*yield*/, Book.findById(bookId)];
            case 1:
                book = _b.sent();
                console.log("book", book);
                reviews = { userId: userId, name: name_1, review: review, rating: rating };
                return [4 /*yield*/, Book.update({ _id: bookId }, { $push: { reviews: reviews } })];
            case 2:
                updatedBook = _b.sent();
                return [4 /*yield*/, Book.findById(bookId)];
            case 3:
                newbook = _b.sent();
                newreviews = newbook.reviews.map(function (review) { return review; });
                console.log("newReviews", newreviews);
                res.send(newreviews);
                return [3 /*break*/, 5];
            case 4:
                err_4 = _b.sent();
                res.send("book not found");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addReview = addReview;
var getReview = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newbook, newreviews, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                console.log("getbookByIdRoute", id);
                return [4 /*yield*/, Book.findById(id)];
            case 1:
                newbook = _a.sent();
                newreviews = newbook.reviews.map(function (review) { return review; });
                res.send(newreviews);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.log(err_5);
                res.send(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getReview = getReview;
