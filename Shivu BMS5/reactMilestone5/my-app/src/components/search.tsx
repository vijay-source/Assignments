import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import "../App.css"

const SearchBar = (props: any) => {
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState("");
  // const { state } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);

  function handleSearch(event: any) {
    setSearchInput(event.target.value);
  }
  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };
  return (
    <div className="search-bar">
      <select className="select" onChange={handleChange}>
        <option value="text">Select</option>
        <option value="id">ID</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
        {/* <option value="text">Text</option> */}
      </select>
      <input
        type="text"
        name="id"
        id="st1"
        className="search"
        required
        placeholder="Enter here to search"
        onChange={handleSearch}
      />
      <button
        id="search-button"
        type="submit"
        onClick={() => props.searchBooks(searchInput, selected, dispatch)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
