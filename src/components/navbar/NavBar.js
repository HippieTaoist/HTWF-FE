import { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

// let navigate = Navigate();

//bring in navbar styling
import './navbar.css';

import { navbarMenuOptions } from '../../data/navbarMenuOptions';

export default function Navbar() {
  // set useState variables
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [menuOptionDescription, setMenuOptionDescription] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const {
    dispatch,
    state: { user },
  } = useContext(AuthContext);

  return (
    <nav className='navigation'>
      <a
        href='/'
        className='brand-name'>
        HippieTaoist Worm Farm
      </a>

      <div>
        <ul className='navigation-menu'>
          {navbarMenuOptions.map((navbarMenuOption, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setMenuOptionDescription(navbarMenuOption.desc);
                }}
                onMouseMove={(e) => {
                  setCursorPosition({ x: e.clientX, y: e.clientY + 100 });
                }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setMenuOptionDescription(navbarMenuOption.desc);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setMenuOptionDescription('');
                }}>
                <Link to={navbarMenuOption.link}>{navbarMenuOption.title}</Link>
              </button>
            </li>
          ))}
        </ul>
        {isHovering && (
          <div
            className='custom-cursor'
            style={{
              left: cursorPosition.x + 'px',
              top: cursorPosition.y + 'px',
            }}>
            {menuOptionDescription}
          </div>
        )}
      </div>
      <div
      // onMouseLeave={() => {
      //       setIsNavExpanded(!isNavExpanded);
      //     }}
      >
        <button
          className='hamburger'
          onMouseEnter={() => {
            setIsNavExpanded(true);
          }}
          // onMouseLeave={() => {
          //   setIsNavExpanded(!isNavExpanded);
          // }}
        >
          {/* hamburger svg code*/}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='white'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <ul
          className={`hamburger-menu ${isNavExpanded ? 'expanded' : ''}`}
          onMouseEnter={() => {
            setIsNavExpanded(true);
          }}
          onMouseLeave={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          {navbarMenuOptions.map((navbarMenuOption, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setMenuOptionDescription(navbarMenuOption.desc);
                }}>
                <Link to={navbarMenuOption.link}>{navbarMenuOption.title}</Link>
                <div className='navbar-menu-link-description'>
                  {navbarMenuOption.desc}
                </div>
              </button>
            </li>
          ))}
          {/*
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
          {user ? (
            <div>
              <li>
                <Link to={`/user/profile/${user.username}`}>Profile</Link>
              </li>
              <li>
                <b>
                  <a
                    href='#'
                    onClick={() => {
                      dispatch({ type: 'LOGOUT' });
                    }}
                  >
                    Logout
                    <br />
                    {user.username}
                  </a>
                </b>
              </li>
            </div>
          ) : (
            <li>
              <Link to={'/user/sign-in'}>Login</Link>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
}

// ------------OLDER CODE------------------------------------------------
{
  /* <ul
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
          {user ? (
            <div>
              <li>
                <Link to={`/user/profile/${user.username}`}>Profile</Link>
              </li>
              <li>
                <b>
                  <a
                    href='#'
                    onClick={() => {
                      dispatch({ type: 'LOGOUT' });
                    }}
                  >
                    Logout
                    <br />
                    {user.username}
                  </a>
                </b>
              </li>
            </div>
          ) : (
            <li>
              <Link to={'/user/sign-in'}>Login</Link>
            </li>
          )}
        </ul> */
}
