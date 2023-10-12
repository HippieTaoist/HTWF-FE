// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// Import Home from Component Folder
import Home from './routes/home/Home';

// Import Layout
import BlogPostLayout from './components/layouts/BlogPostsLayout';
import BookstoreLayout from './components/layouts/BookstoreLayout';
import HomeLayout from './components/layouts/HomeLayout';
import Layout from './components/layouts/Layout';

import UserLayout from './components/layouts/UserLayout';

// Import from User Component Folder
import CreateUser from './routes/user/User-Create';
import SignUp from './routes/user/SignUp/SignUp';
import ShowUserDetails from './routes/user/User-Details';
import Profile from './routes/user/Profile/Profile';

//Import from  BlogPost Component Folder
import CreateBlogPost from './routes/blog-post/backend/BlogPost-Create';
import ShowBlogPostList from './routes/blog-post/backend/BlogPost-List';
import ShowBlogPostDetails from './routes/blog-post/backend/BlogPost-Details';
import ShowBlogPostDetail	 from './routes/blog-post/BlogPost-Detail';

import UpdateBlogPost from './routes/blog-post/backend/BlogPost-Update';
import DeleteBlogPost from './routes/blog-post/backend/BlogPost-Delete';

//Import From Book Component Folder
import CreateBook from './routes/book/Book-Create';
import ShowBookList from './routes/book/Book-List';
import ShowBookDetails from './routes/book/Book-Details';
import UpdateBookInfo from './routes/book/Book-Update';
import DeleteBook from './routes/book/Book-Delete';

//import from Husbandry Route folder
import ShowHusbandryArticleList from './routes/husbandry/HusbandryArticle-List';
import ShowHusbandryArticleDetails from './routes/husbandry/HusbandryArticle-Details';

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
import BlogPosts from './routes/blog-post/blogs/blog-posts';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={<HomeLayout />}>
              <Route element={<Home />} />

              {/* User Routes*/}
              <Route
                path='/user'
                element={<UserLayout />}>
                <Route
                  path='sign-in'
                  element={<SignIn />}
                />
                <Route
                  path='sign-up'
                  element={<SignUp />}
                />
                <Route
                  path='create'
                  element={<CreateUser />}
                />
                <Route
                  path='show/:id'
                  element={<ShowUserDetails />}
                />
                <Route
                  path='profile/:username'
                  element={<Profile />}
                />
              </Route>

              {/* Blog Post Routes */}
              <Route
                path='/blog-posts'
                element={<BlogPostLayout />}>
                <Route index element={<BlogPosts />}/>
                <Route
                  path='create'
                  element={<CreateBlogPost />}
                />
                <Route
                  path='show/:index/:title'
                  element={<ShowBlogPostDetail />}
                />
                <Route
                  path='show/:id'
                  element={<ShowBlogPostDetails />}
                />
                <Route
                  path='update/:id'
                  element={<UpdateBlogPost />}
                />
                <Route
                  path='delete/:id'
                  element={<DeleteBlogPost />}
                />
              </Route>

              {/* Husbandry Routes */}
              <Route
                path='/husbandry'
                element={<ShowHusbandryArticleList />}>
                <Route
                  path='show/:article'
                  element={<ShowHusbandryArticleDetails />}
                />
              </Route>

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
