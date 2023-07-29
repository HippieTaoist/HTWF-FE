import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBlogPost = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState({
    main_img: '',
    title: '',
    author: '',
    post_body: '',
    published_date: '',
    publisher: '',
  });

  const onChange = (e) => {
    setBlogPost({ ...blogPost, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/api/blogposts', blogPost)
      .then((res) => {
        setBlogPost({
          main_img: '',
          title: '',
          author: '',
          post_body: '',
          published_date: '',
          publisher: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateBlogPost!');
      });
  };

  return (
    <div className='CreateBlogPost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Blog Post List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Blog Post</h1>
            <p className='lead text-center'>Create new Blog Post</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='file'
                  accept='image/png,image/jpeg'
                  id='main_img'
                  name='main_img'
                  className='form-control'
                  value={blogPost.main_img}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Blog Post'
                  name='title'
                  className='form-control'
                  value={blogPost.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={blogPost.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Body of this Blog Post'
                  name='post_body'
                  className='form-control'
                  value={blogPost.post_body}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={blogPost.published_date}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPost;
