import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const JokeMemeCard = (props) => {
  const jokeMeme = props.jokeMeme;

  return (
    <div className='card-container'>
      {jokeMeme.type === 'Story' && (
        <div>
          <h2>{jokeMeme.title}</h2>
          <div>
            <p>{jokeMeme.story}</p>
          </div>
          <div>Credit: {jokeMeme.author}</div>
        </div>
      )}
      {jokeMeme.type === 'Meme' && (
        <div>
          <div>
            <h2>{jokeMeme.title}</h2>
          </div>
          <img src={jokeMeme.image} alt='JokeMemes' height={200} />
          <div>Credit: {jokeMeme.author}</div>
        </div>
      )}
      {jokeMeme.type === 'Q&A' && (
        <div>
          <h2>{jokeMeme.title}</h2>
          <div>
            <h3>{jokeMeme.question}</h3>
          </div>
          <div>
            <h3>{jokeMeme.answer}</h3>
          </div>
          <div>Credit: {jokeMeme.author}</div>
        </div>
      )}

      <div className='desc'>
        <h2>
          <Link to={`/show-jokeMeme/${jokeMeme._id}`}>{jokeMeme.title}</Link>
        </h2>
        <h3>{jokeMeme.author}</h3>
      </div>
    </div>
  );
};

export default JokeMemeCard;
