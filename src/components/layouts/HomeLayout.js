import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}