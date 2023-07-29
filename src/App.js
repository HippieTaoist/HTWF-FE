import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Import from  BlogPost Component Folder
import CreateBlogPost from './components/BlogPost/CreateBlogPost';
import ShowBlogPostList from './components/BlogPost/ShowBlogPostList';
import ShowBlogPostDetails from './components/BlogPost/ShowBlogPostDetails';

//Import From Book Component Folder
import ShowBookList from './components/Book/ShowBookList';
import ShowBookDetails from './components/Book/ShowBookDetails';
import UpdateBookInfo from './components/Book/UpdateBookInfo';
import UpdateBlogPost from './components/Book/UpdateBlogPost';

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
