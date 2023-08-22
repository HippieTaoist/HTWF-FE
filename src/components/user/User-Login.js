import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import CSS from User.css
import './user.css';

function UserLogin() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'there is not book record!'
      : books.map((book, k) => <Book book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='admin-bar'>
        <div className='row-md'>
          <Link
            to='/create-book'
            className='btn btn-outline-warning float-right'
          >
            + Add New Book
          </Link>
        </div>
        <div className='row-md'>
          <Link to='/edit-book' className='btn btn-outline-warning float-right'>
            ~ Edit Existing Book
          </Link>
        </div>
        <div className='row-md'>
          <Link
            to='/create-book'
            className='btn btn-outline-warning float-right'
          >
            - Delete Book
          </Link>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
      <div className='list'>{bookList}</div>
    </div>
  );
}

export default ShowBookList;
