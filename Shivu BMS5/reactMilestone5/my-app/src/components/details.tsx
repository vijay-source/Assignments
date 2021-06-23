/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component, useContext, useEffect, useState } from "react";
import { match, RouteComponentProps } from "react-router-dom";
//import {books} from "./addbook";

import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { deleteBook,addReview,getBookById,getReview } from "../services";
import Card from 'react-bootstrap/Card'
import "../App.css"
import If from "./if"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "react-bootstrap/esm/Button";
import { StarComponent } from "./star-component"

const Details = (props: any) => {
    let id:any=props.match.params.id;
  console.log("id",id);  
  
  const { state } = useContext(BookContext);
  const[answer,setAnswer]=useState("");
  const[rating,setRating]=useState("");
  let SelectedBook = state.SelectedBook;
 
  console.log(SelectedBook)



  const { dispatch } = useContext(BookContext);
  const history = useHistory();
  const handleAnswer = (event: any) => {
    setAnswer(event.target.value);
  };
  const handleRating=(event:any)=>{
    setRating(event.target.value)
  }
  const handleSubmit = () => {
    let ans = {
      userId:state.id,
      name:state.user_name,
      review: answer,
      bookId:SelectedBook._id,
      rating:rating,
     
    };
    console.log(ans);
    addReview(dispatch,ans)
    
   // history.push("/details/"+state.SelectedBook._id)
  }
  
 
console.log("reviews",state.reviews);

    useEffect(()=>{
getReview(dispatch,id)
},[state.reviews])

  return (
    <div>
     
      <div className="row">
        <div className="column1" >

          <img id="imgDetails" src={SelectedBook.cover} alt={SelectedBook.title} />

        </div>
        <div className="column2">
          <h2>{SelectedBook.title}</h2>
          <div className="book-info">
            <p>
              <strong>Author:{SelectedBook.author}</strong>
            </p>
            <p>
              <strong>Rating:{SelectedBook.rating}</strong>
            </p>
            <p>
              <strong>Price :₹{SelectedBook.price}</strong>
            </p>
          </div>
          <br />
          <p>
            <strong>{SelectedBook.description}</strong>
          </p>
          <If condition={localStorage.getItem("login")}>
          <button
              id="del-button"
              onClick={() => {
                deleteBook(dispatch, SelectedBook._id);
                history.push("/books");
              }}
            >
              Delete
            </button>

          </If>
            <div>
             <p className="deatilsp">comments</p>
          {state.reviews.map(function (answer: any) {
        
          return(
           <>
            <p>{answer.name}</p>
            <div className="alert alert-dark" role="alert">
            "{answer.review}"
            <br/><br/>
          
           Rating:<div className="stars"><span><StarComponent rating= {answer.rating} outof={5} minof={1}></StarComponent></span></div>
            
          </div></>
          )
      
      })} 
          </div>   
         

          <div>
          <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          onChange={handleAnswer}
        ></textarea>
        <label htmlFor="floatingTextarea2">Answer</label>
        <br />
        {/*  <input type="number" onChange={handleRating}> rating</input>  */}
       rating
        <input type="text"  id="rating" onChange={handleRating}/>
        <Button variant="dark" onClick={handleSubmit}>
          Send
        </Button>
      </div>
      </div>

        </div>
      </div>
      {/* ); */}
      {/* //   }
        // })} */}


    </div>
  );
}

export default Details;

