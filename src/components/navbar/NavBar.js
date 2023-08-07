// Lesson from https://blog.logrocket.com/create-responsive-navbar-react-css/

// bring in t useState
import { useState } from 'react';

//bring in navbar styling
import './navbar.css';

export default function Navbar() {
  // set useState variables
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='navigation'>
      <a href='/' className='brand-name'>
        HippieTaoist Worm Farm
      </a>

      <button
        className='hamburger'
        onMouseEnter={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code*/}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul
          onMouseLeave={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <li>
            <a href='/books'>Books</a>
          </li>
          <li>
            <a href='/blog-posts'>Blog</a>
          </li>
          <li>
            <a href='#'>Husbandry</a>
          </li>
          <li>
            <a href='/joke-memes'>Jokes and Memes</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#'>Research</a>
          </li>
          <li>
            <a href='#'>Links</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
