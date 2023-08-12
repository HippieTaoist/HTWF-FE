import React from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css';

const BlogPost = (props) => {
  const blogPost = props.blogPost;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='BlogPosts'
        height={200}
      />
      <div className='desc'>
        <img src={blogPost.main_img} alt={blogPost.title} />
        <h2>
          <Link to={`/blog-post/show/${blogPost._id}`}>{blogPost.title}</Link>
        </h2>
        <h3>{blogPost.author}</h3>
        <p>{blogPost.postBody}</p>
        <h4>Published: {blogPost.published_date}</h4>
        <h4>Last Updated: {blogPost.updated_date}</h4>
      </div>
    </div>
  );
};

export default BlogPost;
