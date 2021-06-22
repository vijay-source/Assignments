import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import serviceProvider from "../services/movie-services"
import { useDispatch, useSelector } from "react-redux";
import { Link,Route, useHistory } from "react-router-dom";
import Pagenation from "./Pagenation";
import Modal from "./modal";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function MovieList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const services=new serviceProvider();


  const dispatch=useDispatch();


  const history=useHistory();
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrenrPage]=useState(1);
  const [moviesPerPage,setMoviesPerPage]=useState(10);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMessage, setmodalMessage] = useState("");


useEffect(()=>{
  setLoading(true);
  services.getMmovies(dispatch);
  setLoading(false);
},[])
const movieList=useSelector((state:any)=>state.movies);


const user=useSelector((state:any)=>state.user.user)


const isLoggedIn=useSelector((state:any)=>state.user.isLoggedIn)
console.log("movies--->",movieList);

const indexofLastMovie=currentPage * moviesPerPage;
const indexofFirstMovie=indexofLastMovie-moviesPerPage;
const currentMovies=movieList.movies.slice(indexofFirstMovie,indexofLastMovie);
const paginate=(pageNumber:any)=>setCurrenrPage(pageNumber)
const handleFavorites=(imdbID:any)=>{
  const favParams={
    userId:user.id,
    imdbID:imdbID
  }
services.addToFavourites(dispatch,favParams)
.then((result:any)=>{
setModalShow(true);
//console.log(result);

setmodalMessage(result.data);
})
}
  return (<>
  <Modal
      // header="Failed"
      body={modalMessage}
      show={modalShow}
      onHide={() => {
        setModalShow(false);
      }}
    />
    <div className="row row-cols-1 row-cols-md-5 g-4">
    {currentMovies.map(function (movie: any) {
        return (
            <div className="col" id="movie-card">
               <div className="card">
               <Link to={"/movie/"+movie.imdbID}>

                    <img src={movie.Poster} className="card-img-top" alt="..." id="list-img"/>
               </Link>

                    <div className="card-body">
                      {isLoggedIn?<button className="bookmark" onClick={()=>handleFavorites(movie.imdbID)}><i className="fa fa-heart" id="heart"></i>Bookmark</button>:null}
                      
                    </div>
                </div>
               <Route path={"/movie/"+movie.imdbID}></Route>
            </div>
        )
    })}
    <div className="pages">
    <Pagenation moviesPerPage={moviesPerPage} totalMovies={movieList.movies.length} paginate={paginate}/>
    </div>
</div>
 </> );
}
