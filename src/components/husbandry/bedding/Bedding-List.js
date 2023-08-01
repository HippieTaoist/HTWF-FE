import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './Book-Card';

function ShowBookList() {
  const [books, setBooks] = useState([]);

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
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-blog-post'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className='list'>{blogPostList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;
