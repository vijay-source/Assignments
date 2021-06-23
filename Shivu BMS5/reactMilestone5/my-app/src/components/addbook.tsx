import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { addBooks } from "../services";

function AddBook(props: any) {
  
  const { state,dispatch } = useContext(BookContext);
 /*  const [id, setId] = useState(""); */
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const history = useHistory();

 
  useEffect(() => {
    setTitle(state.formData.title);
    setAuthor(state.formData.author);
    setPrice(state.formData.price);
    setRating(state.formData.rating);
    setDescription(state.formData.description);
    setCover(state.formData.cover);
  }, [state.formData]);
  console.log(state.formData);
  

  /* function handleIdChange(event: any) {
    setId(event.target.value);
  } */

  function handleTitleChange(event: any) {
    setTitle(event.target.value);
  
  }
  function handleAuthorChange(event: any) {
    setAuthor(event.target.value);
  }
  function handlePriceChange(event: any) {
    setPrice(event.target.value);
  }
  function handleRatingChange(event: any) {
    setRating(event.target.value);
  }
  function handleDescriptionChange(event: any) {
    setDescription(event.target.value);
  }
  function handleCoverChange(event: any) {
    setCover(event.target.value);
  }
  function handleSubmit() {
  
    
   if(title===""|| author===""|| price===""|| rating===""|| description===""||cover===""){
    console.log("enter all fields");
    
   
   } else{
       const book = {
      // id: id,
      title: title,
      author: author,
      price: price,
      rating: rating,
      description: description,
      cover: cover,
    };
    /* let token =  localStorage.getItem("login"); */
  if(localStorage.getItem("login")){
      addBooks(dispatch, book);
      history.push("/books")
  }else{
    dispatch({ type: "FORM_DATA", formData: book });
   history.push("/login?error=please login to add books")
  }
  
    }
    

  }

  return (
    <div className="book-form">
      <form className="form-area">
        <h2>Add New Book</h2> <hr />
        <br />
       {/*  <div>
          <label htmlFor="title">Id : </label>
          <input
            type="text"
            name="id"
            placeholder="Book id"
            value={id}
            onChange={handleIdChange}
            required
          />
        </div> */}
        <br />
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            placeholder="Book title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            name="author"
            placeholder="Book author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Price : </label>
          <input
            type="text"
            name="price"
            placeholder="Book price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="rating">Rating : </label>
          <input
            type="text"
            name="rating"
            placeholder="Book rating"
            value={rating}
            onChange={handleRatingChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="cover">Cover : </label>
          <input
            type="text"
            name="cover"
            placeholder="Book cover"
            value={cover}
            onChange={handleCoverChange}
            required
          />
        </div>
        <br />
        <div>
          
          <button
            id="add-button"
            type="submit"
            onClick={() => {
              
             /*  if(localStorage.getItem("login")){ */
                handleSubmit();
             
             /*  }else{
                history.push("/login")
              } */
             
            }}
          >
            ADD
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}

export { AddBook };
