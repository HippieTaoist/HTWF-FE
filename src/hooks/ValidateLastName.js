import { useEffect, useState } from 'react';
import { isAlpha } from 'validator';

export default function ValidateLastName() {
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (lastName.length > 0) {
        if (!isAlpha(lastName)) {
          setError('Last Name must be letters only');
        }
      }
    }
    if (onBlur) {
      if (lastName.length === 0) {
        setError('Last Name must not be empty');
      }
    }
  }, [lastName, onFocus, onBlur]);

  const handleOnChange = (e) => {
    if (!isAlpha(e.target.value)) {
      setError('Last Name must be letters only, no special characters');
    }
    if (e.target.value.length === 0) {
      setError('Last Name must not be empty');
    }
    if (isAlpha(e.target.value)) {
      setError('');
      setLastName(e.target.value);
    }
  };
  return [lastName, setOnFocus, setOnBlur, handleOnChange, error];
}
