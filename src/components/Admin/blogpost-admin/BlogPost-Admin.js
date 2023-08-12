import ShowBlogPostList from '../../../functions/ShowBlogPostList';

export default function BlogPostAdmin() {
  return (
    <div>
      I AM BLOGPOST ADMIN
      {/* I want to have this be a list of  blogposts setup in a grid fashion.
     Under each blogpost there will be button for Details, Update or Delete */}
      {ShowBlogPostList()}
    </div>
  );
}
