import React from 'react';

export default function CategoryLister({ dataList }) {
  console.log('dataList: ', dataList);
  let categoryList = dataList.map((listItem, index) => (
    <div key={index}>
      {listItem.categories.map((category, categoryIndex) => (
        <button key={categoryIndex}>{category}</button>
      ))}
    </div>
  ));

  return (
    <div>
      {categoryList}
    </div>
  );
}
