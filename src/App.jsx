import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "./api";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  // Fetch blogs from backend
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  // Add new blog
  const addBlog = async (blog) => {
    try {
      if (editingBlog) {
        await updateBlog(editingBlog._id, blog);
        setEditingBlog(null);
      } else {
        await createBlog(blog);
      }
      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
    }
  };

  // Edit blog
  const editBlog = (blog) => {
    setEditingBlog(blog);
  };

  // Delete blog
  const removeBlog = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>📝 My Blog</h1>
      </header>
      <main>
        <BlogForm addBlog={addBlog} editingBlog={editingBlog} />
        <BlogList blogs={blogs} removeBlog={removeBlog} editBlog={editBlog} />
      </main>
    </div>
  );
}

export default App;