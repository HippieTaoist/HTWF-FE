import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

// Hooks
import ValidateFirstName from '../../../hooks/ValidateFirstName';
import ValidateLastName from '../../../hooks/ValidateLastName';
import ValidateEmail from '../../../hooks/ValidateEmail';
import ValidateUsername from '../../../hooks/ValidateUsername';
import ValidatePassword from '../../../hooks/ValidatePassword';
import CheckToken from '../../../hooks/CheckToken';

//Utilities
import AxiosBackend from '../../../utils/axios/AxiosBackend';

import './signup.css';

export default function SignUp() {
  const [nameFirst, setFirstNameOnFocus, setFirstNameOnBlur, firstNameError] =
    ValidateFirstName();

  const [nameLast, setLastNameOnFocus, setLastNameOnBlur, lastNameError] =
    ValidateLastName();

  const [email, setEmailOnFocus, setEmailOnBlur, emailError] = ValidateEmail();

  const [username, setUsernameOnFocus, setUsernameOnBlur, usernameError] =
    ValidateUsername();

  const [password, setPasswordOnFocus, setPasswordOnBlur, passwordError] =
    ValidatePassword();

  const navigate = useNavigate();

  const { checkJwtToken } = CheckToken();

  let userLevel;
  async function handleSubmit(e) {
    console.log(e);
    e.preventDefault();

    try {
      payload = await AxiosBackend.post('/api/users.user-create', {
        userLevel,
        nameFirst,
        nameLast,
        username,
        email,
        password,
      });
      console.log('payload', payload);

      toast.success(
        "Congrats, You're All Signed Up!\n Click This Notifications To Sign In",
        {
          onClick: () => navigate('/sign-in'),
        }
      );
    } catch (err) {
      console.log(err);

      console.log(err.response);
      toast.error('Error: ', err);
    }
  }

  if (firstNameError) {
    toast.error('First Name Error: ', firstNameError);
  }
  if (lastNameError) {
    toast.error('Last Name Error: ', lastNameError);
  }
  if (usernameError) {
    toast.error('Username Error: ', usernameError);
  }
  if (emailError) {
    toast.error('Email Error: ', emailError);
  }
  if (passwordError) {
    toast.error('Password Error: ', passwordError);
  }

  useEffect(() => {
    if (checkJwtToken()) {
      navigate('/');
    }
  }, [checkJwtToken, navigate]);

  return (
    <>
      <div className='SignUp-form-container'>
        <form className='SignUp-form' onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type='text'
              className='SignUp-input'
              placeholder='First Name'
              onFocus={setFirstNameOnFocus}
              onBlur={setFirstNameOnBlur}
              onChange={handleFistNameOnChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type='text'
              className='SignUp-input'
              placeholder='Last Name'
              onFocus={setLastNameOnFocus}
              onBlur={setLastNameOnBlur}
              onChange={handleLastNameOnChange}
            />
          </label>
          <br />
          <label>
            Email Address:
            <input
              type='text'
              className='SignUp-input'
              placeholder='Email Address'
              onFocus={setEmailOnFocus}
              onBlur={setEmailOnBlur}
              onChange={handleEmailOnChange}
            />
          </label>
          <br />
          <label>
            Username:
            <input
              type='text'
              className='SignUp-input'
              placeholder='Username'
              onFocus={setUsernameOnFocus}
              onBlur={setUsernameOnBlur}
              onChange={handleUsernameOnChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type='password'
              className='SignUp-input'
              placeholder='Password'
              onFocus={setPasswordOnFocus}
              onBlur={setPasswordOnBlur}
              onChange={handlePasswordOnChange}
            />
          </label>
          <br />
          <button type='submit' className='SignUp-Button'>
            Submit Info
          </button>
        </form>
      </div>
    </>
  );
}
