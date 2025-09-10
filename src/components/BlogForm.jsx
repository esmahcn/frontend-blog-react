import React, { useState, useEffect } from "react";

const BlogForm = ({ addBlog, editingBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fill form when editing
  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return; // basic validation
    addBlog({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editingBlog ? "Edit Blog" : "Add New Blog"}
      </h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
        rows={5}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        {editingBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
};

export default BlogForm;