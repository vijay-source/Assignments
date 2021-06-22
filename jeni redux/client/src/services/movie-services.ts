import axios from "axios"
import* as Constants from "../reducers/constants"

class MovieService{
    getMmovies=async(dispatch:any)=>{
        let response =await axios.get('http://localhost:8080/api/movies');
        dispatch({type:Constants.GET_MOVIES,payload:response.data});
        return response;
    }
    getMovieById=async (dispatch:any,id:any)=>{
        let response =await axios.get('http://localhost:8080/api/movies/'+id);
        dispatch({type:Constants.GET_MOVIE_BY_ID,payload:response.data});
         return response;
    }
    searchMovies=async(dispatch:any,searchText:any)=>{
        let response =await axios.get('http://localhost:8080/api/movies/containing/'+searchText);
        dispatch({type:Constants.GET_SEARCHED_MOVIES,payload:response.data});
        return response;
    }
}

export default MovieService;