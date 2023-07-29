import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowBlogPostDetails(props) {
  const [blogPostDetails, setBlogPostDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/blogposts/${id}`)
      .then((res) => {
        setBlogPostDetails(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBlogPostDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3001/api/blogposts/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBlogPostDetails_deleteClick');
      });
  };

  const blogPostDetailsItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{blogPostDetails.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{blogPostDetails.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ISBN</td>
            <td>{blogPostDetails.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{blogPostDetails.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{blogPostDetails.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{blogPostDetails.description}</td>
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
              Show blogPostDetails List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>blogPostDetails's Record</h1>
            <p className='lead text-center'>View blogPostDetails's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{blogPostDetailsItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(blogPostDetails._id);
              }}
            >
              Delete blogPostDetails
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/update-blog-post/${blogPostDetails._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit blogPostDetails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBlogPostDetails;
