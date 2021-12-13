import axios from 'axios';

const url = 'http://localhost:3001/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);

//Auth
export const signin = (userInfo) => axios.post(`${url}/login`, userInfo);
export const signup = (newUserInfo) => axios.post(`${url}/signup`, newUserInfo);
export const logout = (id) => axios.get(`${url}/logout/${id}`);
