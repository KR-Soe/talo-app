import './styles/index.scss';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './loginUser';
import React, { useState } from 'react';

function Login() {
    const [userInfo, onChangeInfo] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const onChangeInput = (evt, field) => {
        onChangeInfo(currentValue => ({
            ...currentValue,
            [field]: evt.target.value
        }));
    }

    const validateUser = async(email, password) => {
        const result = await loginUser(email, password);
    
        if(!result) {
            return;
        }

        if(result.length > 0) navigate('/dashboard')
    }

    return (
      <div className="login-wrapper">
        <div className="login-form">
            <div className='login-form__title'><h1>Welcome</h1></div>
            <div className='login-form__input-container'>
                <input onChange={(evt) => onChangeInput(evt, 'email')} placeholder="Email"/>
            </div>
            <div className='login-form__input-container'>
                <input onChange={(evt) => onChangeInput(evt, 'password')} type='password' placeholder="Password"/>
            </div>
            <div className='login-form__button-container'>
                <button onClick={() => validateUser(userInfo.email, userInfo.password)}>LOGIN</button>
            </div>
            <div className='login-form__footer'>
                <p>Dont have an account?</p>
                &nbsp;
                <p style={{color: 'blue', cursor: 'pointer'}} onClick={() => navigate('/register')}>Sign up</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  