import React from "react"

export const BookReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "GET_BOOKS":


      return { ...state, books: action.payload,status: "SUCCESS"}
    case "ADDBOOK":
      // console.log(action.addbook);

      return {
        ...state,
        books: [...state.books, action.addBook],
        formData:{},
        
        
      };
      case "GET_BOOKS_PENDING":
        return {
            ...state, status: "PENDING"
        }

    case "GET_BOOKS_ERROR":
        return {
            ...state, status: "ERROR"
        }
      case "FORM_DATA":
console.log(action.formdata);

      return {
        ...state,
        formData: action.formData,
       
   
      };
      case "AUTHOR_LIST":
      // console.log(action.BookList);
      return {
        ...state,
        authors: action.authorList,
        
      };
    case "AUTHORS":
      return {
        ...state,
        authorsBooks: action.authors,
      };
    case "DELETE":
      console.log("action of delete id",action.deleteBookId);
      return {
        ...state,
        books: [...state.books.filter((book: any) => book._id !== action.deleteBookId)],
      };
    case "BOOK_DETAILS":
      return {
        ...state,
        SelectedBook: action.selectedBook,
      };
      case "ADD_REVIEW":
        
      const newState={
        ...state,
      };
     
      console.log("new state",newState);
      return newState;
      case "GET_REVIEW":
        return{
           ...state , reviews: action.payload
        }
      case "REGISTER":
        return {...state};
      case "LOGIN":
          return {
              ...state,
              isLoggedIn:true,
              token: action.payload.token,
              user_name:action.payload.name,
              id:action.payload.id,
              
            };
  
      case "LOGOUT":
        //if (action.isLoggedIn) {
        //  return { ...state };
       // } else {
          return {
            ...state,
            isLoggedIn:false,
            token:"",
            user_name:"",
            
          };
        //}
    /* case "LOGIN":
       let isLoggedIn;
      // eslint-disable-next-line
      state.users.map((user: any) => {
        if (
          user.username === action.user.username &&
          user.password === action.user.password
        ) {
          isLoggedIn = true;
        }
      });
      if (isLoggedIn) {
        return {
          ...state,
          isLoggedIn: true,
          token: action.token,
        };
      } else {
        alert("Username or password is incorrect");
        console.log("Incorrect username or password");
        return { ...state };
      } 
     /*  return {
        ...state, isLoggedIn:true
      } 

    case "LOGOUT":
     /*  if (action.isLoggedIn) {
        return { ...state };
      } else {
        return {
          ...state,
          isLoggedIn: false,
          token: action.token,
        };
      } 
      return {
        ...state, isLoggedIn:false
      } */
    case "USERS_LIST":
      console.log(action.Users, " Users List");

      return {
        ...state,
        users: action.Users,
      };
    case "SEARCH_BOOKS_BY_ID":
      return {
        ...state,
        isSearched: true,
        searchedBook: action.searchedBookById,
      };
    case "SEARCH_BOOKS_BY_AUTHOR":
      return {
        ...state,
        isSearched: true,
        books: action.searchedBooksByAuthor,
      };
    case "SEARCH_BOOKS_BY_TITLE":
      return {
        ...state,
        isSearched: true,
        books: action.searchedBooksByTitle,
      };
    case "SEARCH_BOOKS_BY_RATING":
      return {
        ...state,
        isSearched: true,
        books: action.searchedBooksByRating,
      };
    case "SEARCH_BOOKS_BY_PRICE":
      return {
        ...state,
        isSearched: true,
        books: action.searchedBooksByPrice,
      };
    default:
      return state;
  }
}