import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

import axios from 'axios';

export default function Profile() {
  const {
    dispatch,
    state: { user },
  } = useContext(AuthContext);
  let profUsername = user.username;

  console.log(profUsername);
  async function getProfile() {
    try {
      let payload = await axios.get(
        'http://localhost:3001/api/users/user-profile',
        { profUsername },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      console.log('Profile payload', payload);
    } catch (err) {
      console.log('err: ', err);
      console.log('err message: ', err.message);
    }

    getProfile();
    return (
      <div>
        Profile
        <div>{user ? getProfile() : '<div>No Profile Available</div>'}</div>
      </div>
    );
  }
}
