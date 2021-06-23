import { Route, Link, HashRouter, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import BookList from "./components/booklist";
import { AddBook } from "./components/addbook";
import Details from "./components/details";
import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import { BookContext } from "./context/BookContext"
import If from "./components/if"
import AuthorList from "./components/authorList";

/* function If() {
  const [check, setCheck] = useState(false);
  const { state, dispatch } = useContext(BookContext);
  const logout = async () => {

    localStorage.clear();
    dispatch({ type: "LOGOUT" })
  };
  useEffect(() => {
    console.log(state.isLoggedIn)

  })
  return (
    <>
      {check ? <>  <li><Link to="/addbook">Add Books</Link></li>
      </> : <>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link onClick={() => logout()} to="/">LogOut</Link></li>
      </>}

    </>
  )
}
 */

function App() {


  const [loginFailed, setLoginFailed] = useState("");
  const { state, dispatch } = useContext(BookContext);





  /*  const authentication = async (username: string, password: string) => {
     console.log(username, password); */

  /*  let auth = await fetch("http://localhost:8060/users/login", {
     method: "POST",
     body: JSON.stringify({ username: username, password: password }),
     headers: { "content-type": "application/json" },
   });
   let valid = await auth.json();
   console.log(valid);
   if (valid === 401) {
     setLoginFailed("failed");
   } else {
     localStorage.setItem("login", valid);
     setLoginFailed("success");
     dispatch({type:"LOGIN"})
   }
 }; */
  /*  const handleNewUser = async (newUser: any) => {
     console.log("reg");
     await fetch("http://localhost:8060/users/register", {
       method: "POST",
       body: JSON.stringify(newUser),
       headers: { "Content-Type": "application/json" },
     });
     console.log("reg2");
   }; */
  return (
    <BrowserRouter>
      <div>
        <h1>Book Management System</h1>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/books">Book List</Link>
          </li>
          <li>
            <Link to="authors">Authors List</Link>
          </li>
          
          <li> { <Link to="/addbook" >Add Books</Link> } </li>
          <li> {state.isLoggedIn?null:<Link to="/login" >Login</Link>}</li>
        {/*   <li> {state.isLoggedIn?null:<Link to="/register" >Register</Link>}</li> */}
          <li>  {state.isLoggedIn?<Link onClick={() =>{localStorage.clear();dispatch({type:"LOGOUT"})}} to="/"> Logout</Link>:null}</li>


          {/*  <If condition={localStorage.getItem("login")}>
         <li>
             
              <Link to="/register">Register</Link>
            
          </li></If>   */}
          <If condition={!(state.isLoggedIn)}>
         <li>
             
              <Link to="/register">Register</Link>
            
          </li></If> 
       


        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/books" component={BookList}></Route>
        <Route path="/authors" component={AuthorList}></Route>
        <Route exact path="/addbook" component={AddBook}><AddBook></AddBook></Route>
        <Route  path="/login" > <Login></Login></Route>
        <Route  path="/details/:id" component={Details}></Route>
        <Route  path="/register" component={Register}></Route>

      </div>
    </BrowserRouter>
  );
}
export default App;
