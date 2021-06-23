import React, { useState,useContext } from "react";
import { Route, HashRouter, useHistory } from "react-router-dom";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Home from "./home";
import { registerUser } from "../services";
import {  Form, Col } from "react-bootstrap";
import { BookContext } from "../context/BookContext";

const Register = (props: any) => {
    const [name,setName]=useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(BookContext);
  const history = useHistory();
 
 
  function inputname(e: any) {
    setName(e.target.value);
  }
  function inputusername(e: any) {
    setUserName(e.target.value);
  }
  function inputpassword(e: any) {
    setPassword(e.target.value);
  }
 
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
  function handleSubmit() {
    const user = {
        name:name,
      username: username,
      password: password,
     
    };
  registerUser(user,dispatch );
  }


  return (
    <>
     
       <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid  justify="center">
                     
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='name' placeholder='name' fullWidth required onChange={inputname}/>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={inputusername}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required  onChange={inputpassword}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth   onClick={() => {
            handleSubmit();
            history.push("/");
          }}>Sign Up</Button>
                
            </Paper>
        </Grid>

    </>
  );
};
export default Register;
