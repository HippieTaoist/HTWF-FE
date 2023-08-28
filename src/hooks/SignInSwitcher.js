import { useState, useEffect } from 'react';
import { isAlphanumeric, isEmail } from 'validator';

export default function SignInSwitcher() {
  const [signIn, setSignIn] = useState('');
  const [error, setError] = useState('');
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {
    {
      if (onBlur) {
        if (signIn.length === 0) {
          setError('Sign In must not be empty, please use email or username');
        } else {
          setError('');
        }
      }
    }
  }, [signIn, onBlur]);

  const handleOnChange = (e) => {
    if (!isEmail(e.target.value)) {
      if (isAlphanumeric(e.target.value)) {
        setSignIn(e.target.value);
        console.log(signIn);
      }
    } else {
      setError('Username is not alphanumeric format, please try again.');
    }
    if (isEmail(e.target.value)) {
      setSignIn(e.target.value);
    }
  };
  return [signIn, setOnBlur, handleOnChange, error];
}
