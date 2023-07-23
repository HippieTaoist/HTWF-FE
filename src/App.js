import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBlogPost from './components/CreateBlogPost';
import ShowBookList from './components/ShowBookList';
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
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
