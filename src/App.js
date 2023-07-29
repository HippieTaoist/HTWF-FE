import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBlogPost from './components/CreateBlogPost';
import ShowBookList from './components/ShowBlogPostList';
import ShowBlogPostList from './components/ShowBlogPostList';
import ShowBlogPostDetails from './components/ShowBlogPostDetails';

import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import UpdateBlogPost from './components/UpdateBlogPost';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBlogPostList />} />
          <Route path='/create-blog-post' element={<CreateBlogPost />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/update-blog-post/:id' element={<UpdateBlogPost />} />
          <Route path='/show-blog-post/:id' element={<ShowBlogPostDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
