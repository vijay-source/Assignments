import { BookContext } from "./BookContext";
export const Reducer = (state: any, action: any): any => {

    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state, books: action.payload
            };

        case "ADD_BOOK":
            return {
                ...state, books:[state.books, action.payload]
            }


        case "DELETE_BOOK":
            return { ...state, books: [...state.books.filter((book: any) => book._id !== action.payload)] }
            break;


        case "BOOK_BY_ID":
            return {
                ...state,
                selectedBook: action.selectedBook,
            };

        case "SEARCH_BOOKS_BY_ID":
            return {
                books: action.payload
            };
        case "SEARCH_BOOKS_BY_AUTHOR":
            return {

                books: action.payload,
            };
        case "SEARCH_BOOKS_BY_TITLE":
            return {
                books: action.payload
            };
        case "SEARCH_BOOKS_BY_RATING":
            return {
                books: action.payload
            };
        case "SEARCH_BOOKS_BY_PRICE":
            return {
                books: action.payload
            };

        case 'USER_REGISTRATION':
            console.log(state)
            return {
                ...state, users:[...state.users,action.payload]
            }

        case "USER_LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                // user_id: action.payload.id,
                // user_name:action.payload.name,
            };


        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                token: "",
            };

        //         case 'LOGIN_USER':
        //             let isLoggedIn;
        //             state.users.map((user: any) => {

        //                 if (user.email === action.user.email && user.password === action.user.password) {
        //                     isLoggedIn = true;
        //                 }
        //             })
        //             if (isLoggedIn) {
        //                 return {
        //                     ...state,
        //                     isLoggedIn: action.isLoggedIn
        //                 }
        //             }
        //             else {

        //                 alert('username or password is wrong')
        //                 return state;
        //             }



        //         case "LOGOUT":
        //             if (action.isLoggedIn) {
        //                 return { ...state };
        //             } else {
        //                 return {
        //                     ...state,
        //                     isLoggedIn: action.isLoggedIn,
        //                 };
        //             }
        //         default:
        //             return state;
        //     }
    }
}