import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import registerUser from './register';

function Register() {
    const [userInfo, onChangeInfo] = useState({ email: '', password: '', username: '' });
    const navigate = useNavigate();

    const onChangeInput = (evt, field) => {
        onChangeInfo(currentValue => ({
            ...currentValue,
            [field]: evt.target.value
        }));
    };

    const registerHandler = async () => {
        const result = await registerUser(userInfo);

        if(result.error) {
            console.log(result.message)
            return;
        }

        navigate('/');
    };

    return (
      <div className="login-wrapper">
        <div className="login-form">
            <div className='login-form__title'><h1>Create Account</h1></div>
            <div className='login-form__input-container'>
                <input onChange={(evt) => onChangeInput(evt, 'username')} placeholder="Username"/>
            </div>
            <div className='login-form__input-container'>
                <input onChange={(evt) => onChangeInput(evt, 'email')} placeholder="Email"/>
            </div>
            <div className='login-form__input-container'>
                <input onChange={(evt) => onChangeInput(evt, 'password')} type='password' placeholder="Password"/>
            </div>
            <div className='login-form__button-container'>
                <button onClick={() => registerHandler()}>REGISTER</button>
            </div>
            <div className='login-form__footer'>
                <p>Have an account?</p>
                &nbsp;
                <p onClick={() => navigate('/')} style={{color: 'blue', cursor: 'pointer'}}>Sign in</p>
            </div>
        </div>
      </div>
    );
};
  
export default Register;
  