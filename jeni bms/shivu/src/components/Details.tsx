import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BookContext } from '../context/AppContext';
import { deleteBook, getBook } from '../service/services';
import Star from './Star';

function Details(props:any) {
    let id=props.match.params.id;
    const history=useHistory();
    const {state,dispatch} =useContext(BookContext);
    // useEffect(()=>{
    //     getBook(dispatch,id);
    // })
   // const [book,setBook]=useState(state.book_detail);
    return (
        <>
            {/* {state.book_detail.title}
            <button className="btn btn-dark" type="button" onClick={()=>{deleteBook(dispatch,state.book_detail._id);history.push("/")}}>Delete</button> */}
            <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">
    <div className="container d-flex justify-content-center">
        <div className="card p-2">
            <div className="p-info px-3 py-3">
                <div>
                    <h5 className="mb-0">Book By {state.book_detail.author}</h5> <span>{state.book_detail.title}</span>
                    <p><Star value={state.book_detail.rating} /></p>
                </div>
                <div className="p-price d-flex flex-row"> <span>₹</span>
                    <h1>{state.book_detail.price}</h1>
                </div>
                <div className="heart"> <i className="bx bx-heart"></i> </div>
            </div>
            <div className="text-center p-image"> <img src={state.book_detail.cover}/> </div>
            <div className="p-about">
                <p>{state.book_detail.description}</p>
            </div>
            <div className="buttons d-flex flex-row gap-3 px-3"> {state.isLoggedIn?<button type="button" className="btn btn-dark w-100" onClick={()=>{deleteBook(dispatch,state.book_detail._id,state.token);history.push("/")}}>Delete</button>:null}  </div>
            {/* <button className="btn btn-outline-dark w-100">Edit</button> */}
        </div>
    </div>
</div>
        </>
    );
}

export default Details;