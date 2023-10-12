import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = (sentPost) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    setMarkdownContent(sentPost);
  }, [sentPost]);
  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
