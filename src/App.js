import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBlogPost from './components/CreateBlogPost';
import ShowBookList from './components/ShowBlogPostList';
import ShowBlogPostList from './components/ShowBlogPostList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route path='/create-blog-post' element={<CreateBlogPost />} />
          <Route path='/edit-book:id' element={<UpdateBookInfo />} />
          <Route
            path='/show-blog-posts/:id'
            element={<ShowBlogPostDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
