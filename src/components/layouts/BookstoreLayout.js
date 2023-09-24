import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function BookstoreLayout() {
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





  return (
    <div className="bookstore-container">
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

      <div className="bookstore-content">
        <Outlet selectedFilters={selectedFilters} />
      </div>
    </div>
  );
}
