import { log } from 'console';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BookContext } from '../context/AppContext';
import { getAllUsers, loginUser } from '../service/services';

function Login(props: any) {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { state,dispatch } = useContext(BookContext);

    function inputusername(e: any) {
        setUsername(e.target.value);
    }
    function inputpassword(e: any) {
        setPassword(e.target.value);
    }
    
     const login = () => {
    
    const user={
        email:email,
        password:password
    }
    loginUser(dispatch,user);

        history.push("/");
    };
    console.log(state.users);
    
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="card mx-5 my-5">
                    <div className="card-body py-2 px-2">
                        <h2 className="card-heading py-3 px-5">Log In</h2>
                        <div className="row rone mx-3 my-3">
                            <div className="col-md-6">
                                <div className="form-group"><label htmlFor="inputEmail" className="sr-only">Email</label><input type="email" className="form-control" id="inputEmail" placeholder="Email or Phone" onChange={inputusername}/></div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group"><label htmlFor="inputPassword" className="sr-only">Password</label><input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={inputpassword} /></div>
                            </div>
                        </div>
                        <div className="row rtwo mx-3">
                            <div className="col-md-6">
                                <div className="form-group"><button type="button" className="btn btn-dark mb-2" onClick={login}>log In</button></div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group"><a href="/register" className="forgot">New User? Register.</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;