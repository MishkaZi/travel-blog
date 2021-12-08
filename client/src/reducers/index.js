import { combineReducers } from 'redux';
import posts from './posts';
import currentId from './currentId';
export default combineReducers({
  posts,
  currentId,
});
