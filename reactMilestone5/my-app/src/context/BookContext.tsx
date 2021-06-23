import { getMaxListeners } from "process";
import React from "react";
import { useReducer, useEffect } from "react"
import { createContext } from "react"

import {BookReducer} from "../reducer/BookReducer"
import {getAllBooks} from "../services"



export const BookContext=React.createContext<any>({});

export const BookContextProvider=(props:any)=>{
    const [state,dispatch]=useReducer(BookReducer,{},()=>{
        return{
            books:[],
            users:[],
            isLoggedIn:false,
            token:"",
            SelectedBook:[],
           color:false,
        formData: {},
        authorsBooks: [],
        authors: [],
        status:"",
        user_name:"",
        id:"",
        reviews:[],

           

        }
    })
    //import getAllBooks from services 
    //write closure

    //write an outer function that takes getALlBooks as parameter
    //return an inner function that will take ...params 
    //in the inner function call getAllBooks in try catch 
    //handle try with success dispatch and catch with error dispatch
    //let getAllBooks=closureOterFunction(getAllBooks)
    //pass getAllBooks along with state and dispatch 

    function outerFunction(getBooks:any,actionName:any){
        return async(...params:any)=>{
            try{
                dispatch({type:actionName+"_PENDING"})
                let response=await getBooks(...params)
                console.log("status from closure",response);
                
                dispatch({type:actionName,payload:response})

            }catch(error){
                dispatch({type:actionName+"_ERROR",payload:error.message})

            }
        }
    }
    
    const getAllBooksFunction=outerFunction(getAllBooks,"GET_BOOKS")
    return (
        <BookContext.Provider value={{state,dispatch,getAllBooksFunction}}>
            {props.children}
        </BookContext.Provider>
    )
}