import React, { useState, useEffect } from "react";

const BlogForm = ({ addBlog, editingBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load blog data when editing
  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addBlog({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingBlog ? "Edit Blog" : "Add a Blog"}</h2>
      <input
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Blog description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />
      <button type="submit">{editingBlog ? "Update Blog" : "Add Blog"}</button>
    </form>
  );
};

export default BlogForm;