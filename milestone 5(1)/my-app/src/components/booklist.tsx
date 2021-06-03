import React, { Component, useState, useEffect, useContext } from "react";
import Details from "./details"
import {BookContext } from "../Context/BookContext";
import {getBookById} from "../services/service"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Searchpart from "./searchpart"
import { StarComponent } from "./starrating";
import { searchBooks } from "./utils";
import SearchBar from "./searchpart";
import { getAllBooks } from "../services/service";
import image1 from "../images/Book1.jpg"
import image2 from "../images/Book2.jpg"
import image3 from "../images/Book3.jpg"
import { Carousel } from "react-bootstrap";



function BookList() {
    const { state, dispatch } = useContext(BookContext);
    const [books, setBooks] = useState(state.books)

    useEffect(() => {
        getAllBooks(dispatch)
    }, []
    )
    // useEffect(() => {
    //     setBooks(state.books)
    // }, [state.books])
    // console.log("vijay", state)

   
    return (
        <div>
            {state.books.map((book: any) => {
                return (
                    <div>
                        <NavLink to={"/details/" + book._id}>
                            <div className="card"
                                id={book._id}
                                onClick={() => {
                                    getBookById(dispatch, book._id);
                                }}>

                                <div className="card-body">
                                    <img id="img" src={book.cover} alt={book.title} />
                                    <h1 className="card-title" id='ttl'>{book.title}</h1>
                                    <div><span>Rating:<StarComponent rating={book.rating} outof={5} minof={1}></StarComponent></span></div>
                                    <p className="card-subtitle mb-2 text-muted" id="cost"><strong>{book.cost}</strong></p>
                                </div>
                            </div>
                        </NavLink>
                        <Route path={"/details/" + book._id} component={Details} />
                    </div>
                )

            })}
             {/* <Carousel fade>
            <Carousel.Item className="carousel-item">
              <img
                className="w-100 carousel-wrap"
                src={image3}
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{fontSize:'larger',fontWeight:'bolder'}}>
                  Chase knowledge through the Pages of a Book and Chase the books through Bookishness
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100 carousel-wrap"
                src={image3}
                alt="Second slide"
              />
             
            </Carousel.Item>
          </Carousel> */}
        </div>
    )
}

export default BookList;