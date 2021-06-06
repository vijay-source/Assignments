import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { BookContext } from '../context/AppContext';
import { registerUser } from '../service/services';

function Register(props: any) {
    const history=useHistory();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNo,setPhoneNo]=useState("")
    const [password,setPassword]=useState("")
    const {dispatch} = useContext(BookContext);
    const handleNameChange=(e:any)=>{
        setName(e.target.value);
    }
    const handleEmailChange=(e:any)=>{
        setEmail(e.target.value);
    }
    const handlePhoneNoChange=(e:any)=>{
        setPhoneNo(e.target.value);
    }
    const handlePasswordChange=(e:any)=>{
        setPassword(e.target.value);
    }
    const handleRegister=()=>{
        let user ={
            name:name,
            email:email,
            phoneNo:phoneNo,
            password:password
        };
        registerUser(user,dispatch);
        //history.push('/login')
    }
    return (
        <div className="Register-Form">
            <h1>User Registration</h1>
            <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name"  value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                        <input type="text" className="form-control" id="phoneNo" placeholder="phone no" value={phoneNo} onChange={handlePhoneNoChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <button type="button" className="btn btn-dark w-100" onClick={handleRegister}>Register</button> 
        
        </div>
    );
}

export default Register;