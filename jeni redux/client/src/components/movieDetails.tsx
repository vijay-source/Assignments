import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import serviceProvider from "../services/movie-services";
function MovieDetails(props: any) {
  let id = props.match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  // const [movie,setMovie]=useState({})
  const services = new serviceProvider();
  const movie = useSelector((state: any) => state.movies.movie);
  useEffect(() => {
    services
      .getMovieById(dispatch, id)
      .then((result: any) => console.log(result.data))
      .catch((err: any) => {
        if (err.response) {
          history.push("/404");
        }
      });
  }, []);
  
  // const movie = useSelector((state: any) => state.movies.movie);
  console.log("movies--->", movie);
  return (
    <div>
      <div className="card">
        <div className="movie-details">
          <div>
            <div className="image">
              <img src={movie.Poster} className="img" />
            </div>
          </div>
          <div>
            <div className="movie-info">
              <h5 className="mb-0">{movie.Title}</h5>{" "}
              <p>Movie by {movie.Director}</p>
              <span></span>
              <p>Actors: {movie.Actors}</p>
              <p>{movie.BoxOffice}</p>
              <h2>imdb Rating: {movie.imdbRating}</h2>
              <div className="p-about">
                <p>{movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
