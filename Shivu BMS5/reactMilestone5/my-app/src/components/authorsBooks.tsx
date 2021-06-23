import { Route, NavLink } from "react-router-dom";
import Details from "./details";
import { useContext, useEffect } from "react";
import "../App.css"
import { getBookById,getAllBooks } from "../services";
import { BookContext } from "../context/BookContext";

function AuthorsBooks(props: any) {
  const { state, dispatch } = useContext(BookContext);
  // const { dispatch } = useContext(BookContext);

  let authorBooks = state.authorsBooks;



  useEffect(() => {
    getAllBooks();
    // eslint-disable-next-line
  }, [state]);

  return (
    <div>
      {/* eslint-disable-next-line */}
      <div>
        {
           authorBooks.map((book: any, index: any) => {
              return (
                <div>
                  <NavLink to={"/details/" + book._id}>
                    <div
                      className="book-card"
                      id={book._id}
                      onClick={() => {
                      getBookById(dispatch, book._id);
                      }}
                    >
                      <br />
                      <img id="img" src={book.cover} alt={book.title} />
                      <h3>{book.title}</h3>
                     
                      <p className="price">
                        <strong>₹{book.price}</strong>
                      </p>
                    </div>
                  </NavLink>
                  <Route path={"/details/" + book._id} component={Details} />
                </div>
              );
            })
          }
      </div>
    </div>
  );
}

export default AuthorsBooks;
