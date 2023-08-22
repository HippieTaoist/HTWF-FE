import { useEffect, useState } from 'react';
import { isAlphanumeric } from 'validator';

export default function ValidateUsername() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (username.length > 0) {
        if (!isAlphanumeric(username)) {
          setError('Username must be alphanumeric');
        }
      }
    }

    if (onBlur) {
      if (username.length === 0) {
        setError('Username must not be empty');
      }
    }
  }, [username, onFocus, onBlur]);

  const handleOnChange = (e) => {
    if (!isAlphanumeric(e.target.value)) {
      setError('Must Be in alphanumeric format');
    }
    if (e.target.value.length === 0) {
      setError('Username cannot be empty');
    }
    if (isAlphanumeric(e.target.value)) {
      setError('');
      setUsername(e.target.value);
    }
  };

  return [username, setOnFocus, setOnBlur, handleOnChange, error];
}
