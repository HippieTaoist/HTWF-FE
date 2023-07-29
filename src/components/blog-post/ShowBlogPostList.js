import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

function ShowBlogPostList() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/blogposts')
      .then((res) => {
        setBlogPosts(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const blogPostList =
    blogPosts.length === 0
      ? 'there is not book record!'
      : blogPosts.map((blogPost, k) => (
          <BlogPost blogPost={blogPost} key={k} />
        ));

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-blog-post'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className='list'>{blogPostList}</div>
      </div>
    </div>
  );
}

export default ShowBlogPostList;
