import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // base
});

// Attach token to outgoing requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// export functions
export const getBlogs = () => API.get("/blogs");
export const createBlog = (data) => API.post("/blogs", data);
export const updateBlog = (id, data) => API.put(`/blogs/${id}`, data);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);