// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// Import Home from Component Folder
import Home from './routes/home/Home';

// Import Layout
import Layout from './components/layouts/Layout';

// Import from User Component Folder
import CreateUser from './routes/user/User-Create';
import SignUp from './routes/user/SignUp/SignUp';
import ShowUserDetails from './routes/user/User-Details';
import Profile from './routes/user/Profile/Profile';

//Import from  BlogPost Component Folder
import CreateBlogPost from './routes/blog-post/BlogPost-Create';
import ShowBlogPostList from './routes/blog-post/BlogPost-List';
import ShowBlogPostDetails from './routes/blog-post/BlogPost-Details';
import UpdateBlogPost from './routes/blog-post/BlogPost-Update';
import DeleteBlogPost from './routes/blog-post/BlogPost-Delete';

//Import From Book Component Folder
import CreateBook from './routes/book/Book-Create';
import ShowBookList from './routes/book/Book-List';
import ShowBookDetails from './routes/book/Book-Details';
import UpdateBookInfo from './routes/book/Book-Update';
import DeleteBook from './routes/book/Book-Delete';

// Import From Joke Meme Component Folder
import CreateJokeMeme from './routes/jokes-and-memes/Joke_Meme-Create';
import ShowJokeMemeList from './routes/jokes-and-memes/Joke_Meme-List';
import ShowJokeMemeDetails from './routes/jokes-and-memes/Joke_Meme-Details';
import UpdateJokeMeme from './routes/jokes-and-memes/Joke_Meme-Update';
import DeleteJokeMeme from './routes/jokes-and-memes/Joke_Meme-Delete';

// Import NavBars from components folder
import NavBar from './components//navbar/NavBar';
import NavBarAdmin from './components/Admin/navbar-admin/NavBarAdmin';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './routes/user/SignIn/SignIn';

import HoverLink from './utils/test/hoverLinkText';
import BookstoreLayout from './components/layouts/BookstoreLayout';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={<Layout />}>
              <Route
                index
                element={<Home />}
              />

              {/* User Routes*/}
              <Route
                exact
                path='/user/sign-in'
                element={<SignIn />}
              />
              <Route
                exact
                path='/user/sign-up'
                element={<SignUp />}
              />
              <Route
                path='/user/create'
                element={<CreateUser />}
              />
              <Route
                path='/user/show/:id'
                element={<ShowUserDetails />}
              />
              <Route
                path='/user/profile/:username'
                element={<Profile />}
              />

              {/* Blog Post Routes */}
              <Route
                exact
                path='/blog-posts'
                element={<ShowBlogPostList />}
              />
              <Route
                path='/blog-post/create'
                element={<CreateBlogPost />}
              />
              <Route
                path='/blog-post/show/:username'
                element={<ShowBlogPostDetails />}
              />
              <Route
                path='/blog-post/update/:id'
                element={<UpdateBlogPost />}
              />
              <Route
                path='/blog-post/delete/:id'
                element={<DeleteBlogPost />}
              />

              {/* Book Route */}
              <Route
                path='/book'
                element={<BookstoreLayout />}>
                <Route
                  index
                  element={<ShowBookList />}
                />
                <Route
                  path='/book/create/:id'
                  element={<CreateBook />}
                />
                <Route
                  path='/book/show/:id'
                  element={<ShowBookDetails />}
                />
                <Route
                  path='/book/update/:id'
                  element={<UpdateBookInfo />}
                />
                <Route
                  path='/book/delete/:id'
                  element={<DeleteBook />}
                />
              </Route>

              {/* Joke Meme Route */}
              <Route
                exact
                path='/joke-memes'
                element={<ShowJokeMemeList />}
              />
              <Route
                path='/joke-meme/create/:id'
                element={<CreateJokeMeme />}
              />
              <Route
                path='/joke-meme/show/:id'
                element={<ShowJokeMemeDetails />}
              />
              <Route
                path='/joke-meme/update/:id'
                element={<UpdateJokeMeme />}
              />
              <Route
                path='/joke-meme/delete/:id'
                element={<DeleteJokeMeme />}
              />
              <Route
                path='/test/hover-link'
                element={<HoverLink />}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
