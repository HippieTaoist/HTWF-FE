import { useEffect, useState } from 'react';
import { isStrongPassword } from 'validator';

export default function ValidatePassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  console.log('Validate Password Called');

  useEffect(() => {
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
  }, [password, onFocus, onBlur]);

  const handleOnChange = (e) => {
    if (!isStrongPassword(e.target.value)) {
      setError('Must be a stronger password.');
    }
    if (e.target.value.length === 0) {
      setError('Password must not be blank.');
    }
    if (isStrongPassword(password)) {
      setPassword(e.target.value);
      setError('');
    }
  };

  return [password, setOnFocus, setOnBlur, handleOnChange, error];
}
