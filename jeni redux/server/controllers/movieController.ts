import Movie from "../models/movieSchema";
import axios from "axios";
import User from "../models/userSchema";
// import Understand from "twilio/lib/rest/preview/Understand";
export const searchMovies = async (req: any, res: any, next: any) => {
  const searchText = req.params.text;
  console.log("search text", searchText);
  const movieURI = `http://www.omdbapi.com/?s=${searchText}&apikey=985549f0`;
  try {
    let response = await axios.get(movieURI);
    let movies = response.data;
    movies.Search.forEach(async (movie: any) => {
      //console.log(movie);
      let newMovie = new Movie(movie);
      let isPresent = await Movie.findOne({ imdbID: movie.imdbID });
      console.log("--------------------------------->", isPresent);

      if (!isPresent) {
        console.log("in if");

        newMovie.save();
      }
    });
    res.status(200).send(movies.Search);
  } catch (error: any) {
    res.status(404).send("Nothing to show");
  }
};
//--------------------------------------------------------
export const getMovies = async (req: any, res: any, next: any) => {
  let movies = await Movie.find();
  res.status(200).send(movies);
};
//-----------------------------------------------------------

export const getMovieById = async (req: any, res: any, next: any) => {
  const id = req.params.id;

  let searchInDb = await Movie.findOne({ imdbID: id });
  if (searchInDb) {
    if (searchInDb.Plot == undefined) {
      console.log("insecond if");
      const movieURI = `http://www.omdbapi.com/?i=${id}&apikey=985549f0`;
      let response = await axios.get(movieURI);
      console.log("querry-->", response.data);

      let movies = response.data;
      console.log(movies);

      await Movie.updateOne(
        { imdbID: id },
        {
          $set: {
            Actors: movies.Actors,
            Director: movies.Director,
            Plot: movies.Plot,
            imdbRating: movies.imdbRating,
            BoxOffice: movies.BoxOffice,
          },
        }
      );
    } else {
      res.status(200).send(searchInDb);
    }
  } else {
    const movieURI = `http://www.omdbapi.com/?i=${id}&apikey=985549f0`;
    let response = await axios.get(movieURI);
    let movies = response.data;
    console.log("movies-->", movies);

    let movie = new Movie({
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
    } else {
      movie
        .save()
        .then((result: any) => res.status(200).send(result))
        .catch((err: any) => res.send(err.message));
    }
  }
};

export const addToFav = async (req: any, res: any, next: any) => {
  const { userId, imdbID } = req.body;
  let alreadyAdded = await Movie.find({
    imdbID: imdbID,
    bookmarkedUser: { $elemMatch: { $eq: userId } },
  });
  if (alreadyAdded.length !== 0) {
    return res.send("Aleardy Bookmarked!");
  } else {
    await Movie.updateOne(
      { imdbID: imdbID },
      { $push: { bookmarkedUser: userId } }
    );
    return res.send("Movie Added to favourites!");
  }
};

export const myFavouriteMovies = async (req: any, res: any, next: any) => {
  try {
    const id = req.params.id;
    console.log("fav id in controller", id, typeof id);
    let bookmarkedUsers = await Movie.find({ bookmarkedUser: id });
    console.log(bookmarkedUsers);
    res.status(200).send(bookmarkedUsers);
  } catch (err) {
    res.status(400).send("Nothing to show");
  }
};

export const moviesWithUserName = async (req: any, res: any, next: any) => {
  let userid: any[] = [];
  let name = new RegExp(req.params.name, "i");

  try {
    let users = await User.find({ name: name });
    console.log("user name", users);
    for (const user of users) {
      let id = user._id;
      console.log("id-->", id);

      userid.push(id.toString());
    }
    // console.log("userid array",Array.isArray(userid));
    let movies = await Movie.find({ bookmarkedUser: { $in: userid } });
    console.log(movies);

    // console.log("---->", cartItems);

    res.status(200).send(movies);
  } catch (err: any) {
    res.status(400).send("Not found");
  }
};