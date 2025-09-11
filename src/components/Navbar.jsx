import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // redirect to home after logout
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link></li>
        </ul>

        <div className="text-white text-2xl font-bold">MyBlog</div>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          {!token ? (
            <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pt-2 pb-4 space-y-2 mb-4">
          <Link to="/" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/blogs" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/about" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
          {!token ? (
            <Link to="/login" className="block text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Login</Link>
          ) : (
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }}
              className="block text-white hover:text-gray-300 w-full text-left"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;