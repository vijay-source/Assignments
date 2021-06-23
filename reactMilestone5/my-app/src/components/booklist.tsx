/* eslint-disable array-callback-return */
import React, { useEffect, useState, useContext } from "react";


import { BookContext } from "../context/BookContext"
import {
    Route,
    Link,
    NavLink,
} from "react-router-dom";

import { StarComponent } from "./star-component"
import { getBookById ,searchBooks} from "../services"
import Details from "./details";
import SearchBar from "./search";
function BookList(props: any) {
    const { state } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const {getAllBooksFunction}=useContext(BookContext)
    const books = state.books
    
    useEffect(() => {
        getAllBooksFunction();
    }, books)
    function searchBooks(searchInput: any, selected: any, dispatch: any) {
        searchBooks(searchInput, selected, dispatch);
      }

//now call the function from context instead of service 
    return (
        <div>
             <SearchBar searchBooks={searchBooks} />
            {books.map((book: any, index: any) => {
                return (
                    <div>
                        <NavLink to={"/details/" + book._id}>
                            <div
                                className="book-card"
                                id={book._id}
                                onClick={() => {
                                    getBookById(dispatch, book._id);
                                }}
                            >
                                <br />
                                <img id="img" src={book.cover} alt={book.title} />
                                <h3>{book.title}</h3>
                Rating:<div className="stars"><span><StarComponent rating={book.rating} outof={5} minof={1}></StarComponent></span></div>
                                <p className="price">
                                    <strong>₹{book.price}</strong>
                                </p>
                            </div>
                        </NavLink>
                        <Route path={"/details/" + book._id} component={Details} />
                    </div>
                );
            })}
        </div>
    )

}



export default BookList;