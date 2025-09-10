import React from "react";

const BlogList = ({ blogs, removeBlog, editBlog }) => {
  return (
    <div className="space-y-6">
      {blogs.length === 0 && (
        <p className="text-gray-500 text-center">No blogs available.</p>
      )}

      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
          <p className="text-gray-700 mb-4">{blog.description}</p>
          <div className="flex space-x-3">
            <button
              onClick={() => editBlog(blog)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => removeBlog(blog._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;