
import React, { useState } from 'react';
import './Login.css'
import loginPhoto from '../../img/logIn.jpg'
import { Link } from 'react-router-dom';
export default function Login() {
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const [link , setLink]=useState("/login");
    const [errMsg , setErrMsg]=useState(false);
    const signIn=()=>{
        if(username==="doctor@gmail.com"&&password==="123456"){
            setLink("/doctorinfo");
        }
        else if(username==="manager@gmail.com"&&password==="123456"){
            setLink("/manager");
        }
        else if(username==="user@gmail.com"&&password==="123456"){
            setLink("/home");
        }
        else{
            setErrMsg(true);
        }
    }
    return (
    <div className='OuterloginBox '>
        <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-5 p-0 ">
                    <img src={loginPhoto} className='w-100 imgLogin' alt="" />
                </div>
                <div class="col-md-7 text-center inerrloginBox  ">
                    <h2 >Sign In Page</h2>
                    <div class="inputs ">
                    {errMsg?<div class="alert alert-danger w-75 m-auto " role="alert">
                        Incorrect Password or Username
                    </div>:""}
                        <input className='inputLogin1' type="email" placeholder="User Name" value={username} 
                        onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                        <input className='inputLogin2' type="password" placeholder="Password" value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <button class="btnlogin text-center" onClick={signIn}><Link to={link} onClick={signIn}>Sign In</Link></button>
                    <p class="text-center forgetText">Forget Password ?  <Link>Click Here</Link></p>
                    <p class="text-center forgetText">Don't have an account ?  <Link  to="/register">Sign Up Now</Link></p>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
