import {
  FETCH_ALL,
  DELETE_POST,
  CREATE_POST,
  LIKE_POST,
  UPDATE_POST,
} from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
    case LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
