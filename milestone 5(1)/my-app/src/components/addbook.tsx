import React, { Component, useState , useContext} from "react";
// import BookList from "./booklist";
import { Route, Link, HashRouter,useHistory  } from "react-router-dom";
import {BookContext} from '../Context/BookContext'
import { addBook } from "../services/service";


function AddBook() {
    const {dispatch}=useContext(BookContext); 
    const history = useHistory();
    const  [book, setBook] = useState({
        title: "",
        author: "",
        cost: "",
        rating:"",
        description:"",
        cover:""
    }
    )
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(book)
        addBook(book,dispatch)
        history.push('/booklist');
    }

    function handleAddBook(event: any) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    return (
        <div>
             <form>
          <div className="form-group">
            <label>Enter Book Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleAddBook}
              name='title'
              value={book.title}
            />
          </div>

          <div className="form-group">
            <label>Enter Book Author</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleAddBook}
              name='author'
              value={book.author}
            />
          </div>
          <div className="form-group">
            <label>Enter Book Cost</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleAddBook}
              name='cost'
              value={book.cost}
            />
          </div>
          <div className="form-group">
            <label>Enter Book Rating</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleAddBook}
              name='rating'
              value={book.rating}
            />
          </div>
          <div className="form-group">
            <label>Enter Book Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleAddBook}
              name='description'
              value={book.description}
            />
          </div>
          <div className="form-group">
           <label>Enter Book Cover</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleAddBook}
              name='cover'
              value={book.cover}
            />
          </div>

          <button onClick={handleFormSubmit} type="submit" className="btn btn-primary" >
            Add Book
          </button>
        </form>
        </div>

    )
}
export { AddBook};