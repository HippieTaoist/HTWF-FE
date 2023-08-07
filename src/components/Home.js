// import dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import posts from sections
import BlogPost from './blog-post/BlogPost-Card';
import JokeMeme from './jokes-and-memes/Joke_Meme-Card';

//import logRocket for errors.
import LogRocket from 'logrocket';
// LogRocket Initiation
LogRocket.init('hippietaoist/hippietaoist-worm-farm');
//LogRocket Identification
LogRocket.identify('hippietaoist', {
  name: 'Shawn Kittel',
  email: 'shawn.m.kittel@gmail.com',

  // Add your own custom user variables here, ie:
  // subscriptionType: 'pro',
});

function Home() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/blogposts')
      .then((res) => {
        setBlogPosts(res.data);
      })
      .catch((err) => {
        console.log('Error from Home');
      });
  }, []);

  const blogPostList =
    blogPosts.length === 0
      ? 'there is not a blog post record!'
      : blogPosts.map((blogPost, k) => (
          <BlogPost blogPost={blogPost} key={k} />
        ));

  return (
    <div className='Home'>
      <div className='container'>
        <div className='row'>
          {/* <div className='col-md-12'>
            <br />
            <h2
              className='display-4 text-center website-title'
              id='website-title'
            >
              <b>HippieTaoist Worm Farm</b>
            </h2>
          </div> */}

          <div className='container'>
            <br />
            <h2> Welcome to the Farm!</h2>
            <article>
              Here at the HippieTaoist worm farm we really strive to be part of
              the solution and in doing so providing you with quality worms,
              vermicast, customer service and information.
            </article>
            <br />
            <div>
              <div className='col-md-11'>
                <Link
                  to='/blog-post/create'
                  className='btn btn-outline-warning float-right'
                >
                  + Add New Blog Post
                </Link>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className='list'>{blogPostList}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
