
import React from 'react';
import './Login.css'
import loginPhoto from '../../img/logIn.jpg'
import { Link } from 'react-router-dom';
export default function Login() {
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
                        <input className='inputLogin1' type="name" placeholder="User Name"/><br/>
                        <input className='inputLogin2' type="password" placeholder="Password"/>
                    </div>
                    <button class="btnlogin text-center"><Link>Sign In</Link></button>
                    <p class="text-center forgetText">Forget Password ?  <Link>Click Here</Link></p>
                    <p class="text-center forgetText">Don't have an account ?  <Link  to="/register">Sign Up Now</Link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
