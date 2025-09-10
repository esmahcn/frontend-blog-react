import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../api";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addBlog = async (blog) => {
    try {
      if (editingBlog) {
        const res = await updateBlog(editingBlog._id, blog);
        setBlogs(blogs.map((b) => (b._id === editingBlog._id ? res.data : b)));
        setEditingBlog(null);
      } else {
        const res = await createBlog(blog);
        setBlogs([...blogs, res.data]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editBlog = (blog) => setEditingBlog(blog);
  const removeBlog = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 md:pt-32">
        <BlogForm addBlog={addBlog} editingBlog={editingBlog} />
        <BlogList blogs={blogs} removeBlog={removeBlog} editBlog={editBlog} />
      </div>
    </>
  );
};

export default HomePage;