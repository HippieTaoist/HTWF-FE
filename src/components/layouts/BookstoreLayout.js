import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function BookstoreLayout() {

  let filters = ['compost','worms'];



  return (
    <div className="bookstore-container">


      <div className="bookstore-content">
      {/* <Outlet  /> */}

        <Outlet context={filters} />
      </div>
    </div>
  );
}