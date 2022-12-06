import './styles/index.scss'

function Login() {
    return (
      <div className="login-wrapper">
        <div className="login-form">
            <div className='login-form__title'><h1>Welcome</h1></div>
            <div className='login-form__input-container'>
                <input placeholder="Email"/>
            </div>
            <div className='login-form__input-container'>
                <input type='password' placeholder="Password"/>
            </div>
            <div className='login-form__button-container'>
                <button>LOGIN</button>
            </div>
            <div className='login-form__footer'>
                <p>Dont have an account?</p>
                &nbsp;
                <a href='/register'>Sign up</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  