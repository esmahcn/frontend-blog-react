import React, { useEffect, useState } from "react";
import { getBlogs } from "../api";

const BlogList = ({ removeBlog, editBlog }) => {
  const [blogList, setBlogList] = useState([]);

  // Load blogs from backend when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        console.log(data.data);
        setBlogList(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogList.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogList.map((blog) => (
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