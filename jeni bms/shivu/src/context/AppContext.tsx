import React, { createContext, useReducer } from 'react';
import { Reducer } from './AppReducer';


export const BookContext=createContext<any>({});
function ContextProvider(props:any) {
    const [state,dispatch]=useReducer(Reducer,{},()=>{
        return {
            books:[],
            book_detail:[],
            searchText: "",
            searchedBook:[],
            token:"",
            users:[],
            isLoggedIn:false,
            user_name:""
        }
    })
    return (
            <BookContext.Provider value={{state,dispatch}}>
                {props.children}
            </BookContext.Provider>
    );
}

export default ContextProvider;