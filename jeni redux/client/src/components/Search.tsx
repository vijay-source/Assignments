import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import serviceProvider from "../services/movie-services";

function SearchBar(props: any) {
    const [searchText,setSearchText]=useState("");
    const dispatch = useDispatch();
    const history=useHistory();
    const services=new serviceProvider();
    const handleSearch=(event:any)=>{
        setSearchText(event.target.value);
    }
    const handleClick=(searchText:any,dispatch:any)=>{
        let text=searchText.slice(0,2);
        console.log("text",text);
        if(text==="tt"){
            console.log("in tt");
            
            history.push("/movie/"+searchText);
        }
        else if(searchText.split("")[0]==="@"){
            console.log("in @");
            
            let text=searchText.slice(1,searchText.split("").length)
            console.log("text in @",text)
            services.searchUsersMovies(dispatch,text);
            // history.push("/user/movies");
            history.push(`/user/movies?q=${text}`);
        }
        else{
            console.log("in simple text");
            
            services.searchMovies(dispatch,searchText);
            history.push(`/search?q=${searchText}`);
        }
        
    }
    return (
        <div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                <button className="btn btn-dark" type="button" onClick={()=>handleClick(searchText,dispatch)}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;