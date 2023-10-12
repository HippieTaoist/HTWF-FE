import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function BlogPostLayout() {
  return (
    <div className='blogpost-container'>
      <div className='blogpost-content'>
        {/* <Outlet  /> */}
        <div>tester blog</div>
        <Outlet>
          <Outlet />
        </Outlet>
      </div>
    </div>
  );
}

// const [selectedFilters, setSelectedFilters] = useState({
//   category: null,
//   author: null,
// });

// const handleFilterClick=(filterCategory, selectedValue) => {
//     setSelectedFilters((prevFilters)=>({
//         ...prevFilters,
//         [filterCategory]:
//         prevFilters[filterCategory] === selectedValue ? null : selectedValue,
//     }));
// };

// <div className="bookstore-navigation">
// {/* Example: Category Filter */}
// <button
//   className={`filter-button ${
//     selectedFilters.category === 'fiction' ? 'active' : ''
//   }`}
//   onClick={() => handleFilterClick('category', 'fiction')}
// >
//   Fiction
// </button>
// <button
//   className={`filter-button ${
//     selectedFilters.category === 'non-fiction' ? 'active' : ''
//   }`}
//   onClick={() => handleFilterClick('category', 'non-fiction')}
// >
//   Non-Fiction
// </button>
// {/* Add more filter buttons */}
// </div>
