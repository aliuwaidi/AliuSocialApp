import React from 'react';
import './Login.css'

function Login() {
  return (
    <div className='login' >
      <div className="loginLeft">
        <h1 className='loginTitle' >AliuSocial</h1>
        <p className='loginInfo' >Connect with friends and the world around you on Aliusocial</p>
      </div>
      <div className="loginRight">
        <form className='loginForm' >
          <input type="text" className="loginEmail" placeholder="Email" />
          <input type="text" className="loginPassword" placeholder="Password" />
          <button type="submit" className="loginSubmit">Log In</button>
          <span className="loginForget">Forgot Password?</span>
          <button type="submit" className="loginCreateAccount">Create a New Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
