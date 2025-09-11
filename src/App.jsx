import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

function App() {
  // 1️⃣ Add token state
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Routes>
      {/* 2️⃣ Pass token and setToken to pages that need it */}
      <Route path="/" element={<HomePage token={token} />} />
      <Route path="/blogs" element={<BlogsPage token={token} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage setToken={setToken} />} /> 
    </Routes>
  );
}

export default App;
