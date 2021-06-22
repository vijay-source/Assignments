import express from "express";
import {addToFav, getMovieById, getMovies, moviesWithUserName, myFavouriteMovies, searchMovies} from "../controllers/movieController";
export const movieRouter = express.Router();

movieRouter.get("/", getMovies);
movieRouter.patch("/favourites",addToFav)
movieRouter.get("/myfavourites/:id",myFavouriteMovies)
movieRouter.get("/userfavourites/:name",moviesWithUserName)
movieRouter.get("/containing/:text", searchMovies);
movieRouter.get("/:id",getMovieById)

// movieRouter.get("/login", loginUser);