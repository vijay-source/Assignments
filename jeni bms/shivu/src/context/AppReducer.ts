export const Reducer = (state: any, action: any): any => {
    switch (action.type) {
        case "GET_BOOKS":
            return { ...state, books: action.payload }
        case "GET_BOOK":
            return { ...state, book_detail: action.payload }
        case "DELETE":
            return {
                ...state,
                books: [...state.books.filter((book: any) => book._id !== action.deleteBookId)],
            };
        case "ADD_BOOK":
            console.log({ ...state, books: [...state.books, action.addBook] });

            return {
                ...state,
                books: [...state.books, action.addBook],
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
            case "REGISTER":
      return {...state};
    case "LOGIN":
        return {
            ...state,
            isLoggedIn:true,
            token: action.payload.token,
            user_name:action.payload.name
          };

    case "LOGOUT":
      //if (action.isLoggedIn) {
      //  return { ...state };
     // } else {
        return {
          ...state,
          isLoggedIn:false,
          token:"",
          user_name:""
        };
      //}
    case "USERS_LIST":
      console.log(action.Users, " Users List");

      return {
        ...state,
        users: action.Users,
      };
    case "GET_USERS":
      return{
        ...state,users:[action.payload]
      }
    default:
      return state;

    }
}