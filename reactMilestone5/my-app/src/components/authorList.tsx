// import { Route, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getAllAuthors,getBooksByAuthorName } from "../services";
import { BookContext } from "../context/BookContext";
import AuthorBooks from "./authorsBooks";
import "../design.css"
import If from "./if";
function AuthorList(props: any) {
  const { state } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  // const [click, setClick] = useState(false);

  const authors = state.authors;


  useEffect(() => {
    getAllAuthors(dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
     
      {/* eslint-disable-next-line */}
      <div className="row">
        <div className="column3" >
        <div className="authors">
        <h4>Authors</h4>
          {authors.map((author: any, index: any) => {
            return (
              <div>
                <br />
               
               <p  id="author-list"
                  onClick={() => {
                    getBooksByAuthorName(dispatch, author);
                  }}>
           <p className="styleauthor"> {author}</p> 
                
               </p>
              </div>
            );
          })}
        </div>
        

        </div>
        <div className="column4">
       <h4>Books</h4>
          <AuthorBooks />
            </div>
           
            </div>
      
    </div>
  );
}

export default AuthorList;
