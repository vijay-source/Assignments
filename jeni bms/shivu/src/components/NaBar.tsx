import React, { useContext } from 'react';
import "../App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Booklist from './Booklist';
import Carousel from './Carousel';
import AddBook from '../components/AddBook'
import Details from './Details';
import Login from './Login';
import Register from './Register';
import SearchBar from "./SearchBar";
import { BookContext } from '../context/AppContext';
function NaBar(props: any) {
    const {state,dispatch} = useContext(BookContext);
    const [modalShow, setModalShow] = React.useState(false);
    console.log("STATES",state);
    
    return (

        <div className="container-fluid">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h2 className="navbar-brand">Book Store</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <Link to="/book_list" className="nav-link active" aria-current="page">Books</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a> */}
                                
                                {state.isLoggedIn?<Link to="/add" className="nav-link active" aria-current="page" onClick={() => setModalShow(true)}>Add Books</Link>:null}
                                {/* <Link to="/add" className="nav-link active" aria-current="page" onClick={() => setModalShow(true)}>Add Books</Link> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-dark" type="submit">Search</button>
                        </form> */}
                        <SearchBar/>
                        
                        {state.isLoggedIn?null:<Link to="/login" className="nav-link active" aria-current="page">Login</Link>}
                        
                        {state.isLoggedIn?<Link onClick={() =>{localStorage.clear();dispatch({type:"LOGOUt"})}} to="/">{state.user_name} Logout</Link>:null}
                    </div>
                </nav>
                {/* <br /><br /> */}
                <Carousel/>
                <Switch>
                    <Route exact path="/" component={Booklist} />
                    <Route path="/book_list" component={Booklist} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/add">
                        <AddBook
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Route>
                    <Route path="/details/:id" component={Details} />

                </Switch>
            </Router>
        </div>

    );
}

export default NaBar;