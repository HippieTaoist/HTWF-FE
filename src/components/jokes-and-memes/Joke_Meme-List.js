import React, { useState, useEffect } from 'react';
// import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import JokeMeme from './Joke_Meme-Card';

function ShowJokeMemeList() {
  const [jokeMemes, setJokeMemes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/wormjokes')
      .then((res) => {
        setJokeMemes(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowJokeMemeList');
      });
  }, []);

  const jokeMemeList =
    jokeMemes.length === 0
      ? 'there is not book record!'
      : jokeMemes.map((jokeMeme, k) => (
          <JokeMeme jokeMeme={jokeMeme} key={k} />
        ));

  return (
    <div className='ShowJokeMemeList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Jokes and Memes List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/joke_meme-create'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className='list'>{jokeMemeList}</div>
      </div>
    </div>
  );
}

export default ShowJokeMemeList;
