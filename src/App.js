import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Import from  BlogPost Component Folder
import CreateBlogPost from './components/blog-post/BlogPost-Create';
import ShowBlogPostList from './components/blog-post/BlogPost-List';
import ShowBlogPostDetails from './components/blog-post/BlogPost-Details';
import UpdateBlogPost from './components/blog-post/BlogPost-Update';

//Import From Book Component Folder
import ShowBookList from './components/book/Book-List';
import ShowBookDetails from './components/book/Book-Details';
import UpdateBookInfo from './components/book/Book-Update';
import DeleteBook from './components/book/Book-Delete';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBlogPostList />} />
          {/* Blog Post Routes */}
          <Route exact path='/blog-posts' element={<ShowBlogPostList />} />
          <Route path='/blog-post/create' element={<CreateBlogPost />} />
          <Route path='/blog-post/show/:id' element={<ShowBlogPostDetails />} />
          <Route path='/blog-post/update/:id' element={<UpdateBlogPost />} />
          {/* Book Route */}
          <Route exact path='/books' element={<ShowBookList />} />
          <Route path='/book/create/:id' element={<CreateBook />} />
          <Route path='/book/show/:id' element={<ShowBookDetails />} />
          <Route path='/book/update:id' element={<UpdateBookInfo />} />
          <Route path='/book/delete/:id' element={<DeleteBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
