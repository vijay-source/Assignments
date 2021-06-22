import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import serviceProvider from "../services/user-services";
import Modal from "./modal";
import * as Constants from "../reducers/constants"
import Loading from "./Loading";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [userName, setuserName] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMessage, setmodalMessage] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const services = new serviceProvider();
  const loggedunuser = useSelector((state: any) => state.user);
  const status = loggedunuser.status;
  const message = loggedunuser.message;
  const handleFname = (event: any) => {
    setFname(event.target.value);
  };
  const handleLname = (event: any) => {
    setLname(event.target.value);
  };

  const handleUserName = (event: any) => {
    setuserName(event.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlephoneNo = (event: any) => {
    setphoneNumber(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleRegister = (event: any) => {
    const user = {
      name: fname + " " + lname,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      userName: userName,
    };
    // services
    //   .registerUser(user, dispatch)
    //   .then((data: any) => {
    //     console.log("register response", data);
    //     history.push("/login");
    //   })
    //   .catch((error: any) => {
    //     console.log("ERROR in register", error);
    //     if (error.response) {
    //       setModalShow(true);
    //       setmodalMessage(error.response.data.message);
    //     }
    //   });
    console.log("the response",services.registerUser(user));
    
      console.log("services.registerUser(user)-->",services.registerUser(user));
      
      dispatch({type:Constants.REGISTER_USER,payload:services.registerUser(user)})
      //same as that of sayan middle ware 
      //check against sttus code
      //is stts as pending ->a wait icon
      //error--> modal
      //done--->data then push to next page
      //history.push("/login");
  }; 
  useEffect(() => {
    // if (status === "pending") {
    //   history.push("/loading");
    // }
    if (status === "done") {
      history.push("/login");
    }
    if (status === "error") {
      console.log("s", status);

      setModalShow(true);
      setmodalMessage(message);
    }
  }, [status]);
  return (
    <>
      <Modal
        // header="Failed"
        body={modalMessage}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
      {status==="pending"?<Loading/>:null}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleFname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleLname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="User Name"
                  name="email"
                  autoComplete="email"
                  onChange={handleUserName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phoneNo"
                  label="phoneNo"
                  type="text"
                  id="phoneNo"
                  autoComplete="phoneNo"
                  onChange={handlephoneNo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePassword}
                />
              </Grid>
              {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleRegister}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  variant="body2"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
export default Register;
