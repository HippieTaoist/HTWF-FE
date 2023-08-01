import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

function DeleteBook(props) {
  const [book, setBook] = useState({
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
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook({
          _id: res.data._id,
          main_img: res.main_img,
          title: res.data.title,
          author: res.data.author,
          post_body: res.data.post_body,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from DeleteBook');
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   _id: book._id,
    //   main_img: book.main_img,
    //   title: book.title,
    //   author: book.author,
    //   post_body: book.post_body,
    //   published_date: book.published_date,
    //   publisher: book.publisher,
    // };

    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log('Error in Deletebook!');
      });
  };

  return (
    <div className='DeleteBlogPost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show book List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Delete book</h1>
            <p className='lead text-center'>Delete book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='main_img'>Main Image</label>
              <img src={book.main_img} />
            </div>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <h1 name='title' className='form-control'>
                {book.title}
              </h1>
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <h2 name='author' className='form-control'>
                {book.author}
              </h2>
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='post_body'>Post Body</label>
              <p name='post_body' className='form-control'>
                {book.post_body}
              </p>
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <h3 name='published_date' className='form-control'>
                {book.published_date}
              </h3>
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <h3 name='publisher' className='form-control'>
                {book.publisher}
              </h3>
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Delete Blog Post {book.id}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
