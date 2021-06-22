"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var movieSchema = new mongoose_1.default.Schema({
    Title: {
        type: String
    },
    Year: {
        type: String
    },
    imdbID: {
        type: String
    },
    Type: {
        type: String
    },
    Poster: {
        type: String
    },
    Actors: {
        type: String
    },
    Director: {
        type: String
    },
    Plot: {
        type: String
    },
    imdbRating: {
        type: String
    },
    BoxOffice: {
        type: String
    },
    bookmarkedUser: {
        type: Array
    }
}, { collection: "movies", timestamps: true });
module.exports = mongoose_1.default.model("movie", movieSchema);
