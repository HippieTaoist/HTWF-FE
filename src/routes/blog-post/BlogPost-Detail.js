import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import '../../App.css';
import axios from 'axios';

import categoryButtons from '../../utils/siteStandards/categoryButtons';

import { blogPostList } from '../../data/blogPostList';

function ShowBlogPostDetail() {
  const [blogPost, setBlogPost] = useState({});

  const { index, title} = useParams();
  const navigate = useNavigate();

  console.log('jggjgjgjg', index);

  async function blogPostRetrieval(index) {
    let BlogPost = await setBlogPost(blogPostList[index]);
    console.log(BlogPost);
  }

  useEffect(() => {
    console.log(index);
    blogPostRetrieval(index);
    console.log(blogPost);

  }, [index]);

  const BlogPostItem = (
    <div>
    <div className="blog-post-container">
    <img src={blogPost.location} alt={blogPost.title ?? 'Worm Blog Pic'}/>
    <div className="blog-post-title">{blogPost.title}</div>
    <div className="blog-post-content">{blogPost.content}</div>
    <div className="blog-post-keywords">{blogPost.keywords}</div>
    <div className="blog-post-categories">{blogPost.categories.map((cat)=>{
      categoryButtons(cat)})}</div>

    </div>




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
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{blogPost.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{blogPost.content}</td>
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

          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBlogPostDetail;
