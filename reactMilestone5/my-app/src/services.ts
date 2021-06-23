import axios from "axios";


 /*  getAllBooks = async (dispatch: any) => {
    await axios
      .get("http://localhost:8060/api/books")
      .then(response => {
        dispatch({ type: "GET_BOOKS", BookList: response.data });
      })
      .catch(err => {
        console.log(err.message);
      }); 
      //get respose with axios
      //return dispatchable object from get all books
      //return ({ type: "GET_BOOKS", BookList: response.data })

  };*/
  export async function  getAllBooks(){
    let response = await axios.get("http://localhost:8060/api/books");
    return(response.data);
  }
  export async function  getBookById  (dispatch: any, id: any) {
    await axios
      .get("http://localhost:8060/api/books/" + id)
      .then(response => {
        dispatch({ type: "BOOK_DETAILS", selectedBook: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  export async function addBooks  (dispatch: any, book: any):Promise<any>{
    let token = "Bearer " + localStorage.getItem("login"); 
   console.log("token from addbook",token);
   
    let check = await axios.post("http://localhost:8060/api/books", book, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    if (check.status === 200) {
      dispatch({ type: "ADDBOOK", addBook: book });
    
       return null;
    }else{
      return "error";
    } 
  };
  export async function addReview(dispatch:any,ans:any){
    try{
      let response=await axios.patch(`http://localhost:8060/api/books/user/review`,ans);
      console.log("addAnswer-->",response.data);
      
    /*   dispatch({type:"ADD_REVIEW"}) */
    }catch(err:any){
      if(err){
        alert("review not added!")
      }
    }
}
export async function getReview(dispatch:any,id:any){

  try{
    let response=await axios.get(`http://localhost:8060/api/books/review/`+id);
    console.log("addAnswer-->",response.data);
    
     dispatch({type:"GET_REVIEW" ,payload:response.data}) 
  }catch(err:any){
    if(err){
      alert("review not added!")
    }
  }
}
  export async function loginUser(dispatch:any,user:any){
    try{
      let response=await axios.post("http://localhost:8060/api/users/login", user);
    console.log("Response",response.data);
    localStorage.setItem("login",response.data);
    dispatch({type:"LOGIN",payload:response.data});
    
    }catch(err:any){
      if(err){
        alert("Invalid Credentials");
      }
    }
  }

  export async function deleteBook  (dispatch: any, id: any)  {
    let token = "Bearer " + localStorage.getItem("login");
    let check = await axios.delete("http://localhost:8060/api/books/" + id, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    {
      dispatch({ type: "DELETE", deleteBookId: id });
    }
  };
  export async function registerUser(user: any, dispatch: any) {  
    let response=await axios.post("http://localhost:8060/api/users/register", user);
    console.log("Response",response.data);
    
    console.log("Rsponse in resister",response.data);
    dispatch({type:"REGISTER"});
  }
  export async function getUsers  (dispatch: any)  {
    await axios
      .get("http://localhost:8060/users")
      .then(response => {
        dispatch({ type: "USERS_LIST", Users: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  export async function  searchBooks (searchInput: any, selected: any, dispatch: any)  {
    if (selected === "id") {
      axios
        .get("http://localhost:8060/api/books/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_BOOKS_BY_ID",
            searchedBookById: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (selected === "author") {
      axios
        .get("http://localhost:8060/api/books/books/by/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_BOOKS_BY_AUTHOR",
            searchedBooksByAuthor: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (selected === "title") {
      axios
        .get("http://localhost:8060/api/books/by/title/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_BOOKS_BY_TITLE",
            searchedBooksByTitle: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (selected === "rating") {
      axios
        .get("http://localhost:8060/api/books/by/rating/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_BOOKS_BY_RATING",
            searchedBooksByRating: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (selected === "price") {
      axios
        .get("http://localhost:8060/api/books/priced/0/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_BOOKS_BY_PRICE",
            searchedBooksByPrice: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };
  export async function  getAllAuthors  (dispatch: any)  {
    await axios
      .get("http://localhost:8060/api/books/all/authors")
      .then(response => {
        dispatch({ type: "AUTHOR_LIST", authorList: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  export async function  getBooksByAuthorName  (dispatch: any, author: any) {
    await axios
      .get("http://localhost:8060/api/books/books/by/" + author)
      .then(response => {
        dispatch({ type: "AUTHORS", authors: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };




