import React, { useState } from 'react';

function Register() {
    return (
      <div className="login-wrapper">
        <div className="login-form">
            <div className='login-form__title'><h1>Create Account</h1></div>
            <div className='login-form__input-container'>
                <input placeholder="Username"/>
            </div>
            <div className='login-form__input-container'>
                <input placeholder="Email"/>
            </div>
            <div className='login-form__input-container'>
                <input type='password' placeholder="Password"/>
            </div>
            <div className='login-form__button-container'>
                <button>REGISTER</button>
            </div>
            <div className='login-form__footer'>
                <p>Have an account?</p>
                &nbsp;
                <a href='/'>Sign in</a>
            </div>
        </div>
      </div>
    );
};
  
export default Register;
  