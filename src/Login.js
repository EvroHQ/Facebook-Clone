import React from 'react';
import './Login.css';

function Login() {

  return (
    <div className='login__container'>
      <div className='login'>
        <div className='logo'>
          <img
            src='https://sofia.medicalistes.fr/spip/IMG/rs/fb/f_logo_RGB-Blue_512.png'
            alt=''
          />
        </div>
        <div className='title'>facebook</div>

        <button type='submit' className='signin-button'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
