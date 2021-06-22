"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
var express_1 = __importDefault(require("express"));
var movieController_1 = require("../controllers/movieController");
exports.movieRouter = express_1.default.Router();
exports.movieRouter.get("/", movieController_1.getMovies);
exports.movieRouter.patch("/favourites", movieController_1.addToFav);
exports.movieRouter.get("/myfavourites/:id", movieController_1.myFavouriteMovies);
exports.movieRouter.get("/userfavourites/:name", movieController_1.moviesWithUserName);
exports.movieRouter.get("/containing/:text", movieController_1.searchMovies);
exports.movieRouter.get("/:id", movieController_1.getMovieById);
// movieRouter.get("/login", loginUser);
