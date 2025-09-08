import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;