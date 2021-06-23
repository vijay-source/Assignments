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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controller/userController");
var Book = require('../models/schema');
exports.router = express_1.default.Router();
exports.router.use(express_1.default.json());
var bookController_1 = require("../controller/bookController");
exports.router.route("").get(bookController_1.getAllBooks);
exports.router.route("").post(userController_1.authenticate, bookController_1.addBook);
exports.router.route('/:id').get(bookController_1.getBookById);
exports.router.route('/:id').delete(userController_1.authenticate, bookController_1.removeBook);
exports.router.route("/all/authors").get(bookController_1.getAllAuthors);
exports.router.route("/user/review").patch(bookController_1.addReview);
exports.router.route("/review/:id").get(bookController_1.getReview);
exports.router.route('/:id').put(function (req, res) {
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
exports.router.get("/books/by/:author", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var author, books, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                author = new RegExp(req.params.author, "i");
                return [4 /*yield*/, Book.find({ author: author })];
            case 1:
                books = _a.sent();
                console.log(books);
                res.send(JSON.stringify(books));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get("/by/title/:title", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, books, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                title = new RegExp(req.params.title, "i");
                return [4 /*yield*/, Book.find({ title: title })];
            case 1:
                books = _a.sent();
                console.log(JSON.stringify(books));
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get("/by/rating/:rating", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Book.find({ rating: { $gte: req.params.rating } })];
            case 1:
                books = _a.sent();
                console.log(JSON.stringify(books));
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get("/priced/:min/:max", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.params.min);
                return [4 /*yield*/, Book.find({
                        $and: [
                            { cost: { $gte: req.params.min } },
                            { cost: { $lte: req.params.max } },
                        ],
                    })];
            case 1:
                books = _a.sent();
                console.log(JSON.stringify(books));
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//registration
/*  //get user details by auth
 router.get("/auth/user",auth,(req:any,res:any)=>{
     User.findById(req.user.id)
     .select("-password")
     .then((user:any)=>res.json(user))
 }) */
