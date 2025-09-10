import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import { getBlogs } from "../api";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 md:pt-32">
        <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>
        <BlogList blogs={blogs} />
      </div>
    </>
  );
};

export default BlogsPage;