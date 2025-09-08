import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  return (
    <div className="container">
      <header>
        <h1>📝 My Blog</h1>
      </header>
      <main>
        <BlogForm addBlog={addBlog} />
        <BlogList blogs={blogs} />
      </main>
    </div>
  );
}

export default App;