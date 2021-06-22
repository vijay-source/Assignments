
import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import serviceProvider from "../services/movie-services"
import { useDispatch, useSelector } from "react-redux";
import { Link,Route, useHistory, useLocation } from "react-router-dom";
import Modal from "../components/modal"
import PageNotFound from "./PageNotFound";
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

export default function SearchList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const services=new serviceProvider();
  const dispatch=useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMessage, setmodalMessage] = useState("");
  const history=useHistory();
  let {search}=useLocation();
  const searchParam=new URLSearchParams(search);
  const searchText=searchParam.get('q');
  const user=useSelector((state:any)=>state.user.user)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
useEffect(()=>{
  services.searchMovies(dispatch,searchText)
  .then((response:any)=>console.log("response from search",response.data))
  .catch((err:any)=>{
    if(err.response){
      history.push("/404")
    }
  })
},[])
const movieList=useSelector((state:any)=>state.movies);
const isLoggedIn=useSelector((state:any)=>state.user.isLoggedIn)
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

console.log("searched movies movies--->",movieList.searchedMovies);

  return (<>
  <Modal
      // header="Failed"
      body={modalMessage}
      show={modalShow}
      onHide={() => {
        setModalShow(false);
      }}
    />
      <div className="row row-cols-1 row-cols-md-6 g-4">
    {movieList.searchedMovies.map(function (movie: any) {
        return (
            <div className="col">
               <Link to={"/movie/"+movie.imdbID}>
               <div className="card">
                    <img src={movie.Poster} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                      {isLoggedIn?<button className="bookmark" onClick={()=>handleFavorites(movie.imdbID)}><i className="fa fa-heart" id="heart"></i>Bookmark</button>:null}
                      
                    </div>
               </Link>
               <Route path={"/movie/"+movie.imdbID}></Route>
            </div>
        )
    })}
</div>
    
 </> );
}

