import axios from "axios";

const API_URL = "http://localhost:5000/blogs"; // backend route

export const getBlogs = () => axios.get(API_URL);
export const createBlog = (data) => axios.post(API_URL, data);
export const updateBlog = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBlog = (id) => axios.delete(`${API_URL}/${id}`);