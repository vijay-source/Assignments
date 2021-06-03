import { BookContext } from "../Context/BookContext";

const axios = require("axios");

// Get all books from server
export async function getAllBooks(dispatch: any) {
  let response = await axios.get("http://localhost:5000/books");
  dispatch({ type: "GET_BOOKS", payload: response.data });
  console.log("response", response.data);
}

export async function getBookById(dispatch: any, id: any) {
  let response = await axios.get("http://localhost:5000/books/" + id);
  dispatch({ type: "BOOK_BY_ID", selectedBook: response.data });
}

export async function addBook(book: any, dispatch: any) {
  let response = await axios.post("http://localhost:5000/books", book);
  dispatch({ type: "ADD_BOOK", payload: response.data });
}

export async function deleteBook(id: any, dispatch: any) {
  let response = await axios.delete("http://localhost:5000/books/" + id);
  if (response.status === 200) {
    dispatch({ type: "DELETE_BOOK", payload: id });
  }
}

export async function searchBooks( dispatch: any, searchInput: any, selected: any) {
  if (searchInput == "author") {
    console.log("searchednew", selected);
    console.log("searched input1", searchInput);
    let response = await axios.get(
      "http://localhost:5000/books/by/" + selected
    );
    let data = await response.data;
    console.log("response new", data);
    dispatch({ type: "SEARCH_BOOKS_BY_AUTHOR", payload: data });
  } 
  
  
  else if (searchInput == "title") {
    console.log("value", selected);
    let response = await axios.get(
      "http://localhost:5000/books/by/title/" + selected
    );
    let data = await response.data;
    dispatch({ type: "SEARCH_BOOKS_BY_TITLE", payload: data });
  }
  
  
  else if (searchInput === "rating") {
  let response = await axios.get( "http://localhost:5000/books/by/rating/" + selected);
  let data = await response.data;
    dispatch({ type: "SEARCH_BOOKS_BY_RATING", payload: data });
  } 
  
  else if (searchInput === "price") {
  let result=selected.split(' ')
  let response = await axios.get(`http://localhost:5000/priced/${result[0]}/${result[1]}` +selected);
  let data = await response.data;
  dispatch({ type: "SEARCH_BOOKS_BY_PRICE", payload:data });
  }
}

export async function addRegistration(dispatch: any,user: any ) {
  console.log("recieving",user)
  let response = await axios.post("http://localhost:5000/registration", user);
  console.log("response from registration",response.data)
  dispatch({ type: "USER_REGISTRATION", payload: response.data });
}

// User Login

export async function loginUser(dispatch:any,user:any){
  try{
    let response=await axios.post("http://localhost:5000/login", user);
  console.log("token",response.data.token);
  localStorage.setItem("login",response.data.token);
  
  dispatch({type:"USER_LOGIN",payload:{token:response.data.token}});
  }
  catch(err:any){
    if(err){
      alert("Invalid Credentials");
    }
  }
}
