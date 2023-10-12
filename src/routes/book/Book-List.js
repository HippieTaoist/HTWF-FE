import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , useOutletContext} from 'react-router-dom';
import Book from './Book-Card';

import { wormBookList } from '../../data/wormBookList';

import CategoryLister from  '../../functions/CategoryLister'

// Import CSS from Book.css
import './book.css';


function ShowBookList() {
  const [books, setBooks] = useState([]);

  let filters = useOutletContext()

  console.log(filters)
  const [selectedFilters, setSelectedFilters] = useState({
    category: null,
    author: null,
  });

    const handleFilterClick=(filterCategory, selectedValue) => {
        setSelectedFilters((prevFilters)=>({
            ...prevFilters,
            [filterCategory]:
            prevFilters[filterCategory] === selectedValue ? null : selectedValue,
        }));
  };



  useEffect(() => {
    setBooks(wormBookList);
  }, [books]);

  const bookList =
    books.length === 0
      ? 'there is not book record!'
      : books.map((book, index) => <Book book={book} key={index} />);

  return (
    <div className='book-store'>
   <div> {CategoryLister(wormBookList)}</div>
     <div className="bookstore-navigation">
        {/* Example: Category Filter */}
        <button
          className={`filter-button ${
            selectedFilters.category === 'fiction' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('category', 'fiction')}
        >
          Fiction
        </button>
        <button
          className={`filter-button ${
            selectedFilters.category === 'non-fiction' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('category', 'non-fiction')}
        >
          Non-Fiction
        </button>
        {/* Add more filter buttons */}
      </div>
        <div className='bookshelf'>{bookList}</div>
        {/* when we upgrade this to filter we will need to pull into a different map function to step through the params and once a match is found add it to another array that will be served back in the return. */}
    </div>
  );
}

export default ShowBookList;
