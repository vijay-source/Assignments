import {createStore} from "redux";
import userReducer from "./userReducer";
import movieReducer from "./movieReducer"
import {combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {promiseResolver} from "./promiseResolver";
import {applyMiddleware} from "redux"
const rootReducer=combineReducers({
    user:userReducer,
    movies:movieReducer
})
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(promiseResolver)));

export default store;