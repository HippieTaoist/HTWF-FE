import React, { useState, useEffect } from 'react';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

export default function CategoryLister({ dataList, handleFilterClick, selectedCategory }) {
  const [uniqueCategories, setUniqueCategories] = useState(new Set());

  useEffect(() => {
    let newUniqueCategories = new Set();
    dataList.forEach((listItem) => {
      listItem.categories.forEach((category) => {
        newUniqueCategories.add(capitalizeFirstLetter(category));
      });
    });
    setUniqueCategories(newUniqueCategories);
  }, [dataList]);

  const categoryButtons = [
    <button
      key="all"
      className={selectedCategory === null ? 'active' : ''}
      onClick={() => handleFilterClick(null)}
    >
      All
    </button>,
    ...Array.from(uniqueCategories).map((category, index) => (
      <button
        key={index}
        className={selectedCategory === category ? 'active' : ''}
        onClick={() => handleFilterClick(category)}
      >
        {category}
      </button>
    ))
  ];

  return (
    <div>
      {categoryButtons}
    </div>
  );
}
