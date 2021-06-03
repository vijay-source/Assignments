
import ReactDOM from 'react-dom';
import React, { Component, useContext } from "react";
import Home from "./components/home"
import BookList from './components/booklist'
import { AddBook } from './components/addbook'
import Details from './components/details'
import { BookContext } from "./Context/BookContext";
import Register from "./components/Registration"
import Login from "./components/login"
import Corousel from "./components/home"
import './design.css'



import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import SearchBar from './components/searchpart';
function SiteHeader() {
    const { state } = useContext(BookContext);
    let isLoggedIn = state.isLoggedIn;
    const { dispatch } = useContext(BookContext);
//    return(
//        <Home></Home>
//    )
    return (
        <div>

            <HashRouter>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Home  </NavLink>
                    <NavLink className="navbar-brand" to="/booklist"> Book List  </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              {isLoggedIn ?  <NavLink className="nav-link" to="/addbook">
                                    Add Books
                </NavLink>:null}
                
                                <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                {isLoggedIn ? null : <NavLink className="nav-link" to="/userRegistration">
                                    Register
                </NavLink>}

                            </li>
                            <li className="nav-item">
                                {isLoggedIn ? null : <NavLink className="nav-link" to="/userLogin">
                                    Login
                </NavLink>}

                            </li>

                            <li className="nav-item">
                               <NavLink onClick={() => {localStorage.clear(); dispatch({ type: "LOGOUT" })}} className="nav-link" to="/">
                                    Logout
                </NavLink>

                            </li>
                          

                            {/* <Link to="/"    onClick={() => {localStorage.clear(); dispatch({ type: "LOGOUT" })}}>  Logout </Link> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <SearchBar />
                        </form>
                        
                    </div>
                </nav>
                <br></br><br></br>

                <Route exact path="/" component={Home}></Route>
                <Route exact path="/booklist"><BookList /></Route>
                <Route path="/addbook" component={AddBook}/>
                <Route path="/details/:id?" component={Details} />
                <Route path="/userRegistration"><Register /></Route>
                <Route path="/userLogin"><Login /></Route>
            </HashRouter>

        </div>
    )

}

export default SiteHeader;