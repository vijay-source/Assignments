import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { BookContext } from "../context/AppContext";
import { addNewBook } from "../service/services";

function AddBook(props: any) {
  const history = useHistory();
  const {state,dispatch } = useContext(BookContext);
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  // function handleIdChange(event: any) {
  //   setId(event.target.value);
  // }

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
  const handleClick = () => {
    const book = {
      title: title,
      author: author,
      price: price,
      rating: rating,
      description: description,
      cover: cover,
    };
    //let token = "Bearer " + localStorage.getItem("login");
    addNewBook(dispatch, book,state.token);
    //, token
    props.onHide();
    history.push("/book_list");
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Author"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Rating
            </label>
            <input
              type="text"
              className="form-control"
              id="rating"
              placeholder="Rating"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={3}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Cover
            </label>
            <input
              type="text"
              className="form-control"
              id="cover"
              placeholder="Cover image"
              value={cover}
              onChange={handleCoverChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{history.push("/")}}>Cancel</Button>

          <Button onClick={handleClick}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddBook;
