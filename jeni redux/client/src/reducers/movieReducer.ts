import * as Constatnts from "./constants";

const initialState={
    movies:[],
    movie:{},
    searchedMovies:[],
    bookmarkResponse:"",
    favouriteMovies:[],
    userFavs:[]
}
const movieReducer=(state:any=initialState,action:any)=>{
    switch(action.type){
        case Constatnts.GET_MOVIES:
            return{...state,movies:action.payload}
        case Constatnts.GET_MOVIE_BY_ID:
            return{...state,movie:action.payload}
        case Constatnts.GET_SEARCHED_MOVIES:
            return{...state,searchedMovies:action.payload}
        default:
            return state;
    }
}

export default movieReducer;