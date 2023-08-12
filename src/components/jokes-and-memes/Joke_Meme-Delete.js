import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import '../../App.css';

function DeleteJokeMeme(props) {
  const [jokeMeme, setJokeMeme] = useState({
    _id: '',
    title: '',
    type: '', //enum: ['Q&A', 'Meme', 'Story'],
    author: '',
    question: '',
    answer: '',
    story: '',
    image: '',
    published_date: '',
    updated_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/jokeMemes/${id}`)
      .then((res) => {
        setJokeMeme({
          title: res.data.title,
          type: res.data.type, //enum: ['Q&A', 'Meme', 'Story'],
          author: res.data.author,
          question: res.data.question,
          answer: res.data.question,
          story: res.data.story,
          image: res.data.img,
          published_date: res.data.published_date,
          updated_date: res.data.updated_date,
          _id: res.data._id,
        });
      })
      .catch((err) => {
        console.log('Error from DeleteJokeMeme');
      });
  }, [id]);

  const onChange = (e) => {
    setJokeMeme({ ...jokeMeme, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8082/api/jokeMemes/${id}`)
      .then((res) => {
        navigate(`/show-jokeMeme/${id}`);
      })
      .catch((err) => {
        console.log('Error in DeletejokeMeme!');
      });
  };

  return (
    <div className='DeleteBlogPost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show jokeMeme List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Delete jokeMeme</h1>
            <p className='lead text-center'>Delete jokeMeme's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            {jokeMeme.img &
            (
              <div className='form-group'>
                <label htmlFor='image'>Image</label>
                <img src={jokeMeme.image} />
              </div>
            )}
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <h1 name='title' className='form-control'>
                {jokeMeme.title}
              </h1>
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <h2 name='author' className='form-control'>
                {jokeMeme.author}
              </h2>
            </div>
            <br />
            {jokeMeme.question &
            (
              <div>
                <div className='form-group'>
                  <label htmlFor='question'>Question</label>
                  <p name='post_body' className='form-control'>
                    {jokeMeme.question}
                  </p>
                </div>

                <br />

                <div className='form-group'>
                  <label htmlFor='answer'>Answer</label>
                  <p name='answeer' className='form-control'>
                    {jokeMeme.answer}
                  </p>
                </div>

                <br />
              </div>
            )}

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <h3 name='published_date' className='form-control'>
                {jokeMeme.published_date}
              </h3>
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <h3 name='publisher' className='form-control'>
                {jokeMeme.publisher}
              </h3>
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Delete JokeMeme ID#: {jokeMeme.id}, Title: {jokeMeme.title}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteJokeMeme;
