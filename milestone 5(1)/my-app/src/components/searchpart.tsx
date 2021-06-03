import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookContext';
import { searchBooks } from "../services/service"

const SearchBar = (props: any) => {
    const [selected, setSelected] = useState("");
    const [searchText, setSearchText] = useState("");
    const { state } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const handleChange = (e: any) => {
        setSearchText(e.target.value)
        console.log("vijay text",searchText)
    }
    const handleSelected = (e: any) => {
        setSelected(e.target.value);
    }

    function handleOnSubmit() {
        searchBooks(dispatch, selected, searchText)
    }
    
    return (
        <div>
            <form className="searchForm">
                <select className="selectSearch" onChange={handleSelected}>
                    <option value="id">ID</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
                <input type="text" placeholder="Search" className="searchInput" onChange={handleChange} />
                <button onClick={handleOnSubmit}>Search</button>
                
            </form>
        </div>
    );
}
export default SearchBar;