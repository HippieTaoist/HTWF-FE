import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

function ShowBlogPostDetails(props) {
  const [blogPost, setBlogPost] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/blogposts/${id}`)
      .then((res) => {
        setBlogPost(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBlogPostDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3001/api/blogposts/${id}`)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBlogPost_deleteClick');
      });
  };

  const BlogPostItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{blogPost.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{blogPost.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ISBN</td>
            <td>{blogPost.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{blogPost.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{blogPost.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{blogPost.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBlogPostDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show blogPost List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>blogPost's Record</h1>
            <p className='lead text-center'>View blogPost's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{BlogPostItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(blogPost._id);
              }}
            >
              Delete blogPost
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/blog-post/update/${blogPost._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit blogPost
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBlogPostDetails;
