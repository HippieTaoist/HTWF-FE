import React, { useState, useEffect } from 'react';
import Book from './Book-Card';
import { wormBookList } from '../../data/wormBookList';
import CategoryLister from '../../functions/CategoryLister';
import './book.css';

function ShowBookList() {
  const [allBooks, setAllBooks] = useState(wormBookList);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = allBooks.filter(book =>
        book.categories.includes(selectedCategory.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(allBooks);
    }
  }, [selectedCategory, allBooks]);

  const handleFilterClick = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const bookList = filteredBooks.map((book, index) => <Book book={book} key={index} />);

  return (
    <div className="book-store">
      <CategoryLister
        dataList={allBooks}
        handleFilterClick={handleFilterClick}
        selectedCategory={selectedCategory}
      />
      <div className="bookshelf">{bookList}</div>
    </div>
  );
}

export default ShowBookList;
