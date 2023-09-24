import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './Book-Card';

import { wormBookList } from '../../data/wormBookList';

// Import CSS from Book.css
import './book.css';


function ShowBookList() {
  const [books, setBooks] = useState([]);



  useEffect(() => {
    // axios
    //   .get('http://localhost:3001/api/books')
    //   .then((res) => {
    //     setBooks(res.data);
    //   })
    //   .catch((err) => {
    //     console.log('Error from ShowBookList');
    //   });
    // console.log(books);
    setBooks(wormBookList);
  }, [books]);

  const bookList =
    books.length === 0
      ? 'there is not book record!'
      : books.map((book, index) => <Book book={book} key={index} />);

  return (
    <div className='book-store'>
        <div className='bookshelf'>{bookList}</div>
        {/* when we upgrade this to filter we will need to pull into a different map function to step through the params and once a match is found add it to another array that will be served back in the return. */}
    </div>
  );
}

export default ShowBookList;
