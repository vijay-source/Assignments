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
exports.moviesWithUserName = exports.myFavouriteMovies = exports.addToFav = exports.getMovieById = exports.getMovies = exports.searchMovies = void 0;
var movieSchema_1 = __importDefault(require("../models/movieSchema"));
var axios_1 = __importDefault(require("axios"));
var userSchema_1 = __importDefault(require("../models/userSchema"));
// import Understand from "twilio/lib/rest/preview/Understand";
var searchMovies = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var searchText, movieURI, response, movies, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchText = req.params.text;
                console.log("search text", searchText);
                movieURI = "http://www.omdbapi.com/?s=" + searchText + "&apikey=985549f0";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get(movieURI)];
            case 2:
                response = _a.sent();
                movies = response.data;
                movies.Search.forEach(function (movie) { return __awaiter(void 0, void 0, void 0, function () {
                    var newMovie, isPresent;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                newMovie = new movieSchema_1.default(movie);
                                return [4 /*yield*/, movieSchema_1.default.findOne({ imdbID: movie.imdbID })];
                            case 1:
                                isPresent = _a.sent();
                                console.log("--------------------------------->", isPresent);
                                if (!isPresent) {
                                    console.log("in if");
                                    newMovie.save();
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                res.status(200).send(movies.Search);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(404).send("Nothing to show");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.searchMovies = searchMovies;
//--------------------------------------------------------
var getMovies = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movieSchema_1.default.find()];
            case 1:
                movies = _a.sent();
                res.status(200).send(movies);
                return [2 /*return*/];
        }
    });
}); };
exports.getMovies = getMovies;
//-----------------------------------------------------------
var getMovieById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, searchInDb, movieURI, response, movies, movieURI, response, movies, movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, movieSchema_1.default.findOne({ imdbID: id })];
            case 1:
                searchInDb = _a.sent();
                if (!searchInDb) return [3 /*break*/, 6];
                if (!(searchInDb.Plot == undefined)) return [3 /*break*/, 4];
                console.log("insecond if");
                movieURI = "http://www.omdbapi.com/?i=" + id + "&apikey=985549f0";
                return [4 /*yield*/, axios_1.default.get(movieURI)];
            case 2:
                response = _a.sent();
                console.log("querry-->", response.data);
                movies = response.data;
                console.log(movies);
                return [4 /*yield*/, movieSchema_1.default.updateOne({ imdbID: id }, {
                        $set: {
                            Actors: movies.Actors,
                            Director: movies.Director,
                            Plot: movies.Plot,
                            imdbRating: movies.imdbRating,
                            BoxOffice: movies.BoxOffice,
                        },
                    })];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                res.status(200).send(searchInDb);
                _a.label = 5;
            case 5: return [3 /*break*/, 8];
            case 6:
                movieURI = "http://www.omdbapi.com/?i=" + id + "&apikey=985549f0";
                return [4 /*yield*/, axios_1.default.get(movieURI)];
            case 7:
                response = _a.sent();
                movies = response.data;
                console.log("movies-->", movies);
                movie = new movieSchema_1.default({
                    Title: movies.Title,
                    Type: movies.Type,
                    Poster: movies.Poster,
                    Year: movies.Year,
                    imdbID: movies.imdbID,
                    Actors: movies.Actors,
                    Director: movies.Director,
                    Plot: movies.Plot,
                    imdbRating: movies.imdbRating,
                    BoxOffice: movies.BoxOffice,
                });
                if (movies.Title === undefined) {
                    res.status(404).send({ success: false, message: "Movie Not Found" });
                }
                else {
                    movie
                        .save()
                        .then(function (result) { return res.status(200).send(result); })
                        .catch(function (err) { return res.send(err.message); });
                }
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.getMovieById = getMovieById;
var addToFav = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, imdbID, alreadyAdded;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userId = _a.userId, imdbID = _a.imdbID;
                return [4 /*yield*/, movieSchema_1.default.find({
                        imdbID: imdbID,
                        bookmarkedUser: { $elemMatch: { $eq: userId } },
                    })];
            case 1:
                alreadyAdded = _b.sent();
                if (!(alreadyAdded.length !== 0)) return [3 /*break*/, 2];
                return [2 /*return*/, res.send("Aleardy Bookmarked!")];
            case 2: return [4 /*yield*/, movieSchema_1.default.updateOne({ imdbID: imdbID }, { $push: { bookmarkedUser: userId } })];
            case 3:
                _b.sent();
                return [2 /*return*/, res.send("Movie Added to favourites!")];
        }
    });
}); };
exports.addToFav = addToFav;
var myFavouriteMovies = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, bookmarkedUsers, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                console.log("fav id in controller", id, typeof id);
                return [4 /*yield*/, movieSchema_1.default.find({ bookmarkedUser: id })];
            case 1:
                bookmarkedUsers = _a.sent();
                console.log(bookmarkedUsers);
                res.status(200).send(bookmarkedUsers);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).send("Nothing to show");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.myFavouriteMovies = myFavouriteMovies;
var moviesWithUserName = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userid, name, users, _i, users_1, user, id, movies, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userid = [];
                name = new RegExp(req.params.name, "i");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, userSchema_1.default.find({ name: name })];
            case 2:
                users = _a.sent();
                console.log("user name", users);
                for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                    user = users_1[_i];
                    id = user._id;
                    console.log("id-->", id);
                    userid.push(id.toString());
                }
                return [4 /*yield*/, movieSchema_1.default.find({ bookmarkedUser: { $in: userid } })];
            case 3:
                movies = _a.sent();
                console.log(movies);
                // console.log("---->", cartItems);
                res.status(200).send(movies);
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                res.status(400).send("Not found");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.moviesWithUserName = moviesWithUserName;
