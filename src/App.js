import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Import from  BlogPost Component Folder
import CreateBlogPost from './components/blog-post/CreateBlogPost';
import ShowBlogPostList from './components/blog-post/ShowBlogPostList';
import ShowBlogPostDetails from './components/blog-post/ShowBlogPostDetails';

//Import From Book Component Folder
import ShowBookList from './components/book/ShowBookList';
import ShowBookDetails from './components/book/ShowBookDetails';
import UpdateBookInfo from './components/book/UpdateBookInfo';
import UpdateBlogPost from './components/book/UpdateBlogPost';

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
