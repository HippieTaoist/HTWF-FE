// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// Import Home from Component Folder
import Home from './components/home/Home';

// Import from User Component Folder
import CreateUser from './components/user/User-Create';
import SignUp from './components/user/SignUp/SignUp';
import ShowUserDetails from './components/user/User-Details';

//Import from  BlogPost Component Folder
import CreateBlogPost from './components/blog-post/BlogPost-Create';
import ShowBlogPostList from './components/blog-post/BlogPost-List';
import ShowBlogPostDetails from './components/blog-post/BlogPost-Details';
import UpdateBlogPost from './components/blog-post/BlogPost-Update';
import DeleteBlogPost from './components/blog-post/BlogPost-Delete';

//Import From Book Component Folder
import CreateBook from './components/book/Book-Create';
import ShowBookList from './components/book/Book-List';
import ShowBookDetails from './components/book/Book-Details';
import UpdateBookInfo from './components/book/Book-Update';
import DeleteBook from './components/book/Book-Delete';

// Import From Joke Meme Component Folder
import CreateJokeMeme from './components/jokes-and-memes/Joke_Meme-Create';
import ShowJokeMemeList from './components/jokes-and-memes/Joke_Meme-List';
import ShowJokeMemeDetails from './components/jokes-and-memes/Joke_Meme-Details';
import UpdateJokeMeme from './components/jokes-and-memes/Joke_Meme-Update';
import DeleteJokeMeme from './components/jokes-and-memes/Joke_Meme-Delete';

// Import NavBars from components folder
import NavBar from './components//navbar/NavBar';
import NavBarAdmin from './components/Admin/navbar-admin/NavBarAdmin';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/user/SignIn/SignIn';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className='App'>
          <NavBar />
          <NavBarAdmin />
          <Routes>
            <Route exact path='/' element={<Home />} />

            {/* User Routes*/}
            <Route exact path='/user/sign-in' element={<SignIn />} />

            <Route exact path='/user/sign-up' element={<SignUp />} />
            <Route path='/user/create' element={<CreateUser />} />
            <Route path='/user/show/:id' element={<ShowUserDetails />} />

            {/* Blog Post Routes */}
            <Route exact path='/blog-posts' element={<ShowBlogPostList />} />
            <Route path='/blog-post/create' element={<CreateBlogPost />} />
            <Route
              path='/blog-post/show/:username'
              element={<ShowBlogPostDetails />}
            />
            <Route path='/blog-post/update/:id' element={<UpdateBlogPost />} />
            <Route path='/blog-post/delete/:id' element={<DeleteBlogPost />} />

            {/* Book Route */}
            <Route exact path='/books' element={<ShowBookList />} />
            <Route path='/book/create/:id' element={<CreateBook />} />
            <Route path='/book/show/:id' element={<ShowBookDetails />} />
            <Route path='/book/update/:id' element={<UpdateBookInfo />} />
            <Route path='/book/delete/:id' element={<DeleteBook />} />

            {/* Joke Meme Route */}
            <Route exact path='/joke-memes' element={<ShowJokeMemeList />} />
            <Route path='/joke-meme/create/:id' element={<CreateJokeMeme />} />
            <Route
              path='/joke-meme/show/:id'
              element={<ShowJokeMemeDetails />}
            />
            <Route path='/joke-meme/update/:id' element={<UpdateJokeMeme />} />
            <Route path='/joke-meme/delete/:id' element={<DeleteJokeMeme />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
