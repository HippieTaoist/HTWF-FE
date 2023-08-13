import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nameFirst: '',
    nameLast: '',
    username: '',
    email: '',
    password: '',
    userLevel: 'basic',
    adminLevel: 0,
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/api/users/user-create', user)
      .then((res) => {
        setUser({
          nameFirst: '',
          nameLast: '',
          username: '',
          email: '',
          password: '',
          userLevel: 'basic',
          adminLevel: '0',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateUser!');
      });
  };

  return (
    <div className='CreateUser'>
      <div className='container'>
        <div className='row'>
          <div e='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Blog Post List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Blog Post</h1>
            <p className='lead text-center'>Create new Blog Post</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='First Name Here'
                  id='nameFirst'
                  name='nameFirst'
                  className='form-control'
                  value={user.nameFirst}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Last Name Here'
                  id='nameLast'
                  name='nameLast'
                  className='form-control'
                  value={user.nameLast}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Username Here'
                  name='username'
                  className='form-control'
                  value={user.username}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Here'
                  name='email'
                  className='form-control'
                  value={user.email}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password Here'
                  name='password'
                  className='form-control'
                  value={user.password}
                  onChange={onChange}
                />
              </div>

              <input type='submit' className='' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
