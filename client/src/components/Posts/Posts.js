import React from 'react';
import Post from './Post/Post';
import usestyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
  const classes = usestyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>Posts:</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
