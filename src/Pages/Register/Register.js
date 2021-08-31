import React from 'react';
import './Register.css'

function Register() {
  return (
    <div className='register' >
      <div className="registerLeft">
        <h1 className='registerTitle' >AliuSocial</h1>
        <p className='registerInfo' >Connect with friends and the world around you on Aliusocial</p>
      </div>
      <div className="registerRight">
        <form className='registerForm' >
          <input type="text" className="registerUsername" placeholder="Username" />
          <input type="text" className="registerEmail" placeholder="Email" />
          <input type="text" className="registerPassword" placeholder="Password" />
          <input type="text" className="registerPasswordAgain" placeholder="Enter Password Again" />
          <button type="submit" className="registerSignUp">Sign Up</button>
          <button type="submit" className="registerLogInAccount">Log into Account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
