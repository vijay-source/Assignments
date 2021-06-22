import axios from "axios"
import* as Constants from "../reducers/constants"
class UserServives{
    // registerUser=async (user:any,dispatch:any) =>{
    //     let response =await axios.post('http://localhost:8080/api/user/register',user);
    //     dispatch({type:Constants.REGISTER_USER,payload:response.data});
    //     //only response.data should be sent
    //     //no dispatch as a parameter
    //     //comment dispatch
    //     return response;
    // }
    registerUser=async (user:any) =>{
        let response =await axios.post('http://localhost:8080/api/user/register',user);
        // dispatch({type:Constants.REGISTER_USER,payload:response.data});
        //only response.data should be sent
        //no dispatch as a parameter
        //comment dispatch
        return response;
    }
    delay=(time:any)=>new Promise(resolve=>setTimeout(resolve,time));
    loginUser=async (user:any)=>{
        await this.delay(3000);
        let response =await axios.post('http://localhost:8080/api/user/login',user)
        console.log("response in login-->",response);
        
        return response.data;
        // try{
        //     dispatch({type:Constants.LOGIN_USER,payload:response.data});
        //     console.log(`response.data`, response.data)
        //     return response.data;
        // }
        // catch(error){
        //     return error;
        // }
    }
    logOutUser=async(dispatch:any)=>{
        dispatch({type:Constants.LOGOUT})
    }
}

export default UserServives;