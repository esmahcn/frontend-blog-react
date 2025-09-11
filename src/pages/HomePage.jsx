import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../api";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const user = JSON.parse(localStorage.getItem("user")); // المستخدم الحالي

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
      if (!user) return alert("You must login to add a blog");

      const res = editingBlog
        ? await updateBlog(editingBlog._id, blog)
        : await createBlog(blog);

      if (editingBlog) {
        setBlogs(blogs.map((b) => (b._id === editingBlog._id ? res.data : b)));
        setEditingBlog(null);
      } else {
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
        {!user ? (
          <p className="text-center text-gray-700 text-lg mb-6">
            Welcome! Please login to add your blogs.
          </p>
        ) : (
          <BlogForm addBlog={addBlog} editingBlog={editingBlog} />
        )}

        <BlogList blogs={blogs} removeBlog={removeBlog} editBlog={editBlog} />
      </div>
    </>
  );
};

export default HomePage;