import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const getTopUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getTrendingPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts?type=popular`);
  return response.data;
};

export const getFeed = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts?type=latest`);
  return response.data;
};
