import React from 'react';

// Technique 2: element variables + ternary operator
function BlogDetails({ published }) {
  const status = published ? (
    <p>Blog Details: This blog post is published and live.</p>
  ) : (
    <p>Blog Details: This blog post is still a draft.</p>
  );

  return <div>{status}</div>;
}

export default BlogDetails;
