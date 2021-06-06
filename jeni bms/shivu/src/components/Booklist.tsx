import React, { useContext, useEffect, useState } from 'react';
import { getAllBooks, getBook } from "../service/services"
import { BookContext } from "../context/AppContext";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Star from './Star';
function Booklist(props: any) {
    const history=useHistory();
    const { state, dispatch } = useContext(BookContext);
    //const [books,setBooks]=useState(state.books);
    useEffect(() => {
        getAllBooks(dispatch);
        //setBooks(state.books)
    },[])
    let books=state.books;
    return (
        //         <div>
        //             {state.books.map(function (book: any) {
        //                 return (
        //                     <div className="wrapper">
        //                         <div className="product-img">
        //                             <img src={book.cover} height="420" width="327"/>
        //     </div>
        //                             <div className="product-info">
        //                                 <div className="product-text">
        //                                     <h1>{book.title.split(0,20)}</h1>
        //                                     <h2>by {book.author}</h2>
        //                                     {/* <p>{book.description}</p> */}
        //                                     {/* <p>Harvest Vases are a reinterpretation<br> of peeled fruits and vegetables as<br> functional objects. The surfaces<br> appear to be sliced and pulled aside,<br> allowing room for growth. </p> */}
        //       </div>
        //                                         <div className="product-price-btn">
        //                                             <p><span>₹{book.price}</span></p>
        //                                             <button type="button">Details</button>
        //                                         </div>
        //     </div>
        //   </div>

        //                 )
        //             })}
        //         </div>
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {books.map(function (book: any) {
                return (
                    <div className="col">
                        <div className="card">
                            <img src={book.cover} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{book.title.slice(0,20)}..</h5>
                                <Star value={book.rating} />
                                <p className="card-text">₹{book.price}</p>
                                <button className="btn btn-dark" type="button" onClick={()=>{ getBook(dispatch,book._id);history.push("/details/"+book._id)}}>Details</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    );
}

export default Booklist;