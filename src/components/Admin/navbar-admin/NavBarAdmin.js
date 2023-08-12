import { Link } from 'react-router-dom';

import BlogPostAdmin from '../../Admin/blogpost-admin/BlogPost-Admin';

function NavBarAdmin() {
  return (
    <div>
      {BlogPostAdmin()}
      <div className=''>
        <Link to='/blog-post/create' className=''>
          + Add New Blog Post
        </Link>
      </div>
      <div className=''>
        <Link to='/blog-post/update/list' className=''>
          ~ Update Blog Post
        </Link>
      </div>
      <div className=''>
        <Link to='/blog-post/delete' className=''>
          - Delete Blog Post
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default NavBarAdmin;
