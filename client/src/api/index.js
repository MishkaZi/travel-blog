import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likepost`);

//Auth
export const signin = (userInfo) => API.post(`/users/signin`, userInfo);
export const signup = (newUserInfo) => API.post(`/users/signup`, newUserInfo);
export const logout = (id) => API.get(`/users/logout/${id}`);
