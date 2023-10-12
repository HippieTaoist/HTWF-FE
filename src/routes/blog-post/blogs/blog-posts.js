import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { blogPostList } from '../../../data/blogPostList';
import BlogPost from  './BlogPost'
import ShowBlogPostDetail from '../BlogPost-Detail';

function BlogPosts() {
  // Define a state variable to store the list of blog posts
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch and process data when the component mounts
  useEffect(() => {
    setBlogPosts(blogPostList);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  function locationBuilder(sentLocation) {
      console.log(sentLocation);

      let adjustedLocation = '../../../../' + sentLocation

      console.log('adjsuted', adjustedLocation);


      return adjustedLocation
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {}
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
          {/* <div>{<ShowBlogPostDetail index={index} title={post.title}/>}</div> */}
            <div><Link to={`/blog-posts/show/${index}/${post.title}`}>
              <img
                src={post.img}
                alt={post.title}
              />
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </Link></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPosts;
