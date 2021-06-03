import React, { Component, useState, useContext } from "react";
import BookList from "./booklist";
import { Route, Link, HashRouter, useHistory } from "react-router-dom";
import { BookContext } from '../Context/BookContext'
import { addRegistration } from "../services/service";



const Register = (props: any) =>
 { 
      const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    }
  )

    const { dispatch } = useContext(BookContext);
    const history = useHistory();
    function handleUserChange(event: any) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }


    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(user)
        addRegistration(dispatch, user);
        history.push('/');
    }

    return (
        <div>
            <form id="addnewbook" >
                <label htmlFor='bookId'>Enter User Name</label><br></br>
                <input type="text" name='name' id="userName" value={user.name}
                    onChange={handleUserChange}></input><br></br>

                <label htmlFor='bookTitle'> Enter User Email</label><br></br>
                <input type="text" name='email' id="userEmail" value={user.email}
                    onChange={handleUserChange}></input><br></br>

                <label htmlFor='bookAuthor'>Enter User Password</label><br></br>
                <input type="password" name="password" id="userPassword" value={user.password}
                    onChange={handleUserChange}></input><br></br>

                <button type='submit' id='sbmt' onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Register;



