import React from "react";

const BlogList = ({ blogs, removeBlog, editBlog }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id || blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={() => editBlog(blog)}>Edit</button>
            <button onClick={() => removeBlog(blog._id || blog.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
