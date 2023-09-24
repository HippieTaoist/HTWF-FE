import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import '../../App.css';
import axios from 'axios';

function ShowUserDetails(props) {
  const [user, setUser] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/user-get/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowUserDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3001/api/users/user-delete/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowUserDetails_deleteClick');
      });
  };

  const User = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>First Name</td>
            <td>{user.nameFirst}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Last Name</td>
            <td>{user.nameLast}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>username</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>email</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowUserDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show User List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>User's Record</h1>
            <p className='lead text-center'>View User's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{User}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(user._id);
              }}
            >
              Delete user
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-user/${user._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit user
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowUserDetails;
