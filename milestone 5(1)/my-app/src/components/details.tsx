import React, { useContext, useEffect, useState, Component } from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router';
import { Route, Link, HashRouter } from "react-router-dom";
import { BookContext } from '../Context/BookContext'
import { deleteBook } from '../services/service'




function Details(props: any) {
    const { id } = useParams<any>();
    const { state } = useContext(BookContext);
    let SelectedBook = state.books;
    console.log("selectedBook: " + SelectedBook);
    const { dispatch } = useContext(BookContext);
    const history = useHistory();
    const [books, setBook] = useState({
        title: "",
        author: "",
        cost: "",
        rating: "",
        description: "",
        cover: ""
    })
    useEffect(() => {
        SelectedBook.map((book: any) => {
            if (book._id == id) {
                setBook(book)
            }
        })
    })
    return (
        <div>
             <div className="height"> 
            <div className="card">
                <img id="imgDetails" src={books.cover} />
                <p><strong>Author:{books.author}</strong></p>
                <p><strong>Rating:{books.rating}</strong></p>
                <p><strong>Price :₹{books.cost}</strong></p>
                <h1>{books.title}</h1>
                <p><strong>{books.description}</strong></p>
        .
                {/* <div className="para">
               
                </div> */}
                {<button id='delbtn' onClick={() => {
                    deleteBook(id, dispatch);
                    history.push("/booklist")
                }}>DELETE</button>}
            </div>
            </div>
        </div>
    );
}
export default Details;