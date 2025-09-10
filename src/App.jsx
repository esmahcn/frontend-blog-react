import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Routes>
      {/* Home page with BlogForm + BlogList */}
      <Route path="/" element={<HomePage />} />

      {/* Blogs page showing all blogs */}
      <Route path="/blogs" element={<BlogsPage />} />
       <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;