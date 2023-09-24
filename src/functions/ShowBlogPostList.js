import React, { useState, useEffect } from 'react';
// import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogPost from '../routes/blog-post/BlogPost-Card';

function ShowBlogPostList() {
  console.log('ShowBlogPostList Function File');
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
  return blogPostList;
}

export default ShowBlogPostList;
