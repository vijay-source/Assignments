import { makeStyles } from "@material-ui/core";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import serviceProvider from "../services/user-services";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./movieList";
import MovieDetails from "./movieDetails";
import SearchList from "./SearchList";
import SearchBar from "./Search";
function AppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const services = new serviceProvider();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const hanleLogout = () => {
    services.logOutUser(dispatch);
  };
  const state = useSelector((state: any) => state.user);
  return (
    <div>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none" }}>
              Movieflix
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link eventKey={2}>{/*  */}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <SearchBar />
          <div className="profile">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {/* Open Menu */}
              {state.isLoggedIn ? (
                <Avatar 
                // alt={state.user.name}
                >
                  {state.user.name.slice(0, 1)}
                </Avatar>
              ) : (
                <Avatar />
              )}
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* <IF condition={!state.isLoggedIn}>
              <MenuItem onClick={handleClose}>
                  <Link to="/login">Login</Link>
                </MenuItem>
              </IF> */}
              {!state.isLoggedIn ? (
                <MenuItem onClick={handleClose}>
                  <Link to="/login">Login</Link>
                </MenuItem>
              ) : null}
              {state.isLoggedIn ? (
                <MenuItem onClick={handleClose}>
                  <span>{state.user.name}</span>
                </MenuItem>
              ) : null}
              {state.isLoggedIn ? (
                <MenuItem onClick={handleClose}>
                  <Link to="/myfavourites">
                    <i className="fa fa-heart" id="heart"></i>Favourites
                  </Link>
                </MenuItem>
              ) : null}
              <MenuItem onClick={handleClose}>
                {state.isLoggedIn ? (
                  <div>
                    <ExitToAppIcon />
                    <Link to="/" onClick={hanleLogout}>
                      Logout
                    </Link>
                  </div>
                ) : null}
              </MenuItem>
            </Menu>
          </div>
        </Navbar>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/search" component={SearchList} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppBar;
