import React, { useContext, useState } from "react";
// import {useHistory} from 'react-router-dom'
import { Route,  HashRouter, useHistory } from "react-router-dom";
import {  Col, Form } from "react-bootstrap";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Register from "./register"
import If from "./if"

import jwt from "jsonwebtoken"
import { BookContext } from "../context/BookContext";
import Home from "./home";
import {loginUser} from "../services"


const Login =(props:any)=> {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
    const history = useHistory();
    const { state } = useContext(BookContext);
 

  const { dispatch } = useContext(BookContext);


  function inputlusername(e: any) {
    setUserName(e.target.value);
  }
  function inputlpassword(e: any) {
    setPassword(e.target.value);
  }
  
  const paperStyle={padding :20,height:'70vh',width:280, margin:"40px auto"}

    const btnstyle={margin:'8px 0'}
    const logins = () => {
    
    
      const user={
        username:username,
        password:password
    }
    loginUser(dispatch,user);
  
      history.goBack();
      };
   
 

  return (
    <>
     
       <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid  justify="center">
                     
                    <h2>Sign In</h2>
                    <If condition={window.location.href.indexOf("error") > -1}>
                    <h3 style={{color:"red"}}>sign in to add book</h3></If>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required  onChange={inputlusername}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required  onChange={inputlpassword}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={logins} >Sign in</Button>
                <Typography  > Do you have an account ?
                 
                     <Link  onClick={() =>history.push("/register")}  >
                       Register
                   </Link>
                </Typography>
            </Paper>
        </Grid>

    </>
  );
};
export default Login;
