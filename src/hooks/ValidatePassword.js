import { useEffect, useState } from 'react';
import { isStrongPassword } from 'validator';

export default function ValidatePassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  console.log('Validate Password Called');

  useEffect(
    (e) => {
      if (onFocus) {
        if (password.length > 0) {
          if (!isStrongPassword(password)) {
            setError('Password must be stronger.');
          }
        }
      }

      if (onBlur) {
        if (password.length === 0) {
          setError('Password must not be empty.');
        }
      }
    },
    [password, onFocus, onBlur]
  ); //password <-took out of []

  const handleOnChange = (e) => {
    console.log('e.atarget.value: ' + e.target.value);
    if (e.target.value.length === 0) {
      setError('Password must not be blank.');
    } else {
      if (!isStrongPassword(e.target.value)) {
        setError('Must be a stronger password.');
      } else {
        console.log('passchangingonchange: ' + e.target.value);
        if (isStrongPassword(e.target.value)) {
          setPassword(e.target.value); //e.target.value);
          setError('');
          console.log('password is ', password);
        }
      }
    }
  };

  return [password, setOnFocus, setOnBlur, handleOnChange, error];
}
