import react, { createContext, useReducer } from "react";
import { Reducer } from "../Context/BookReducer";

export const BookContext = createContext<any>({});


export const BookProvider = (props: any) => {
    const [state, dispatch] = useReducer(Reducer, {}, () => {
        return {
            books: [],
            users:[],
            isLoggedIn: false,
            token: "",
            searchText: "",
            selected: '',  
         }})
    return (
        <BookContext.Provider value={{ state, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}