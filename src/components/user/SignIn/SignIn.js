import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

// Utilities
import AxiosBackend from '../../../utils/axios/AxiosBackend';

// Hooks
import SignInSwitcher from '../../../hooks/SignInSwitcher';
import ValidatePassword from '../../../hooks/ValidatePassword';

// context
import { AuthContext } from '../../../context/AuthContext';

import './sign-in.css';

export default function SignIn() {
  // Variables
  //Sign In Password
  const [signInPassword, setSignInPassword] = useState('');
  //set navigate to use useNavigate function
  const navigate = useNavigate();
  //use dispatch to set user state with AuthContext tracking through site.
  const {
    dispatch,
    state: { user },
  } = useContext(AuthContext);
  //signIn variables that operate in input area
  const [signIn, setSignInOnBlur, signInHandleOnChange, signInError] =
    SignInSwitcher();
  // password variables for password input area
  const [password, passwordSetOnBlur, passwordHandleOnChange, passwordError] =
    ValidatePassword();

  // Functions
  async function handleSignInSubmit(e) {
    e.prevent.default();

    console.log('36', signIn);
    console.log('37', signInPassword);

    try {
      let payload = await axios.post(
        'http://localhost:3001/api/users/user-Login',
        {
          signIn,
          signInPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      console.log(payload);

      window.localStorage.setItem('jwtToken', payload.data.payload);

      let decodedToken = jwtDecode(payload.data.payload);

      console.log(decodedToken);

      dispatch({
        type: 'LOGIN',
        email: decodedToken.email,
        username: decodedToken.username,
        _id: decodedToken._id,
        nameFirst: decodedToken.nameFirst,
        nameLast: decodedToken.nameLast,
        createdDate: decodedToken.createdDate,
        updatedLast: decodedToken.updatedLast,
        userLevel: decodedToken.userLevel,
      });

      toast.success(`You are now logged in ${decodedToken.username}`);
      navigate('/');
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  }
  if (signInError || passwordError) {
    console.log(signInError || passwordError);
  }

  return (
    <div className='SignIn'>
      {user && navigate('/')}
      <h1 className='SignIn-page-title'>Sign In</h1>
      <div className='SIgnIn-form-container'>
        <form className='SignIn-form' onSubmit={handleSignInSubmit}>
          <input
            type='text'
            name='username-email'
            id='username-email'
            className='SignIn-username-email'
            placeholder='Email or Username'
            onBlur={setSignInOnBlur}
            onChange={signInHandleOnChange}
            required
          />
          <input
            type='password'
            name='password'
            className='SignIn-password'
            placeholder='Password Here'
            onBlur={passwordSetOnBlur}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <button className='SignIn-button-submit'>Login</button>
        </form>
      </div>
      Sign In Page
    </div>
  );
}
