import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

function UpdateBlogPost(props) {
  const [blogPost, setBlogPost] = useState({
    main_img: '',
    title: '',
    author: '',
    post_body: '',
    published_date: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/blogposts/${id}`)
      .then((res) => {
        setBlogPost({
          main_img: res.main_img,
          title: res.data.title,
          author: res.data.author,
          post_body: res.data.post_body,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBlogPost');
      });
  }, [id]);

  const onChange = (e) => {
    setBlogPost({ ...blogPost, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      main_img: blogPost.main_img,
      title: blogPost.title,
      author: blogPost.author,
      post_body: blogPost.post_body,
      published_date: blogPost.published_date,
      publisher: blogPost.publisher,
    };

    axios
      .put(`http://localhost:8082/api/blogposts/${id}`, data)
      .then((res) => {
        navigate(`/show-blogPost/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateblogPost!');
      });
  };

  return (
    <div className='UpdateBlogPost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show blogPost List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit blogPost</h1>
            <p className='lead text-center'>Update blogPost's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the blogPost'
                name='title'
                className='form-control'
                value={blogPost.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='main_img'>Main Image</label>
              <input
                type='main_img'
                placeholder='Main Img'
                name='main_img'
                className='form-control'
                value={blogPost.main_img}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={blogPost.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='post_body'>Post Body</label>
              <textarea
                type='text'
                placeholder='post_body of the blogPost'
                name='post_body'
                className='form-control'
                value={blogPost.post_body}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <input
                type='text'
                placeholder='Published Date'
                name='published_date'
                className='form-control'
                value={blogPost.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <input
                type='text'
                placeholder='Publisher of the blogPost'
                name='publisher'
                className='form-control'
                value={blogPost.publisher}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update blogPost
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlogPost;
