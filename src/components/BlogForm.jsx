import React, { useState, useEffect } from "react";

const BlogForm = ({ addBlog, editingBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")); // get logged-in user
    if (!user) {
      alert("You must login first");
      return;
    }

    addBlog({
      title,
      description,
      user: user.id, // 👈 attach user id
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        {editingBlog ? "Edit Blog" : "Add New Blog"}
      </h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
        required
      />
      <textarea
        placeholder="Blog Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {editingBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
};

export default BlogForm;