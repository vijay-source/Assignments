const axios = require("axios");
export async function getAllBooks(dispatch: any) {
  let response = await axios.get('http://localhost:3000/books');
  dispatch({ type: "GET_BOOKS", payload: response.data })
}
export async function getBook(dispatch: any, id: any) {
  let response = await axios.get('http://localhost:3000/books/' + id);
  dispatch({ type: "GET_BOOK", payload: response.data });

}
export async function addNewBook(dispatch: any, book: any, token:any) {
  let check = await axios.post("http://localhost:3000/books", book,
 { 
  headers: { "Content-Type": "application/json","x-auth-token": token }}
  );
  if (check.status === 200) {
    dispatch({ type: "ADD_BOOK", addBook: book });
  }
}
export async function deleteBook(dispatch: any, id: any,token:any) {
  //let token = "Bearer " + localStorage.getItem("login");
  console.log(id);

  let check = await axios.delete("http://localhost:3000/books/" + id, {
    headers: { "Content-Type": "application/json","x-auth-token": token },
  });
  //, Authorization: token 
  if (check.status === 200) {
    dispatch({ type: "DELETE", deleteBookId: id });
  }
}
export async function searchBooks(searchInput: any, selected: any, dispatch: any) {
  if (selected === "id") {
    axios
      .get("http://localhost:3000/books/" + searchInput)
      .then((response: any) => {
        dispatch({
          type: "SEARCH_BOOKS_BY_ID",
          searchedBookById: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  } else if (selected === "author") {
    axios
      .get("http://localhost:3000/books/by/author/" + searchInput)
      .then((response: any) => {
        dispatch({
          type: "SEARCH_BOOKS_BY_AUTHOR",
          searchedBooksByAuthor: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  } else if (selected === "title") {
    axios
      .get("http://localhost:3000/books/by/title/" + searchInput)
      .then((response: any) => {
        dispatch({
          type: "SEARCH_BOOKS_BY_TITLE",
          searchedBooksByTitle: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  } else if (selected === "rating") {
    axios
      .get("http://localhost:3000/books/by/rating/" + searchInput)
      .then((response: any) => {
        dispatch({
          type: "SEARCH_BOOKS_BY_RATING",
          searchedBooksByRating: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  } else if (selected === "price") {
    axios
      .get("http://localhost:3000/books/priced/0/" + searchInput)
      .then((response: any) => {
        dispatch({
          type: "SEARCH_BOOKS_BY_PRICE",
          searchedBooksByPrice: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }
};
export async function registerUser(user: any, dispatch: any) {  
  let response=await axios.post("http://localhost:3000/books/users/register", user);
  console.log("Response",response.data);
  
  console.log("Rsponse in resister",response.data);
  dispatch({type:"REGISTER"});
}
export async function loginUser(dispatch:any,user:any){
  try{
    let response=await axios.post("http://localhost:3000/books/users/login", user);
  console.log("Response",response.data);
  localStorage.setItem("login",response.data.token);
  dispatch({type:"LOGIN",payload:response.data});
  
  }catch(err:any){
    if(err){
      alert("Invalid Credentials");
    }
  }
}
export async function getAllUsers(dispatch:any){
  let response=axios.get("http://localhost:3000/books/users/getUsers");
  dispatch({type:"GET_USERS",payload:response.data});
}