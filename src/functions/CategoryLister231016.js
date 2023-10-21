import React, { useState, useEffect } from 'react';

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'


export default function CategoryLister({dataList}) {
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

  const categoryButtons = Array.from(uniqueCategories).map((category, index) => (
    <button key={index}>{category}</button>
  ));

  return (
    <div>
      {categoryButtons}
    </div>
  );
}
