import React from 'react';
import '../Register/Register.css';
import RegisterPhoto from '../../../../img/imgR1.jpg'
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <>
    <div className='OuterRegisterBox '>
        <div class="register">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center inerrRegisterBox  ">
                    <h2 >Sign Up Page</h2>
                    <div class="inputs ">
                      
                        <input className='inputRegister' type="name" placeholder="Enter First Name"/><br/>
                        <input className='inputRegister' type="password" placeholder="Enter Last Name"/><br/>
                        <input className='inputRegister' type="password" placeholder="Enter Email"/><br/>
                        <input className='inputRegister' type="password" placeholder="Enter Strong Password"/>
                    </div>
                    <button class="btnregister text-center"><a href="#">Sign Up</a></button>
                    <p class="text-center forgetText">Already have an account ?  <Link  to="/login">Sign In </Link></p>
                </div>

                <div class="col-md-6 p-0 ">
                  <div className='imgRegisterContainer'>
                  <img src={RegisterPhoto} className='w-100 imgRegister' alt="" />
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}
