import React, { Component, useState, useContext } from "react";
import BookList from "./booklist";
import { Route, Link, HashRouter, useHistory } from "react-router-dom";
import { BookContext } from '../Context/BookContext'
import { loginUser } from "../services/service";
import { addRegistration } from "../services/service";

const Login = (props: any) => {
    const [user, setUser] = useState({

        email: "",
        password: "",
    })

    const { dispatch } = useContext(BookContext);
    const history = useHistory();


    function handleUserChange(event: any) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }


    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(user)
        // dispatch({ type: "LOGIN_USER", user: user,isLoggedIn:true })
        loginUser(dispatch, user)
        history.push('/');
    }


    return (
        <div>
            <form id="addnewbook" >

                <label htmlFor='bookId'>Enter Mail</label><br></br>
                <input type="text" name='email' id="userEmail" value={user.email}
                    onChange={handleUserChange}></input><br></br>



                <label htmlFor='bookId'>Enter User Password</label><br></br>
                <input type="password" name='password' id="userPassword" value={user.password}
                    onChange={handleUserChange}></input><br></br><br></br>


                <button type='submit' id='sbmt' onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login;