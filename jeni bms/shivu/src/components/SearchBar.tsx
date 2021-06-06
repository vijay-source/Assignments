import React, { useContext, useState } from 'react';
import { BookContext } from '../context/AppContext';
import { searchBooks } from '../service/services';

function SearchBar(props: any) {
    const [selected,setSelected]=useState("");
    const [searchText,setSearchText]=useState("");
    const {dispatch}=useContext(BookContext);
    const handleSelected=(event:any)=>{
        setSelected(event.target.value);
    }
    const handleSearch=(event:any)=>{
        setSearchText(event.target.value);
    }
    const handleClick=(searchText:any,selected:any,dispatch:any)=>{
        searchBooks(searchText,selected,dispatch);
    }
    return (
        <div>
            <form className="d-flex">
                <select className="selectSearch" onChange={handleSelected}>
                    <option value="id">ID</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                <button className="btn btn-dark" type="button" onClick={()=>handleClick(searchText,selected,dispatch)}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;