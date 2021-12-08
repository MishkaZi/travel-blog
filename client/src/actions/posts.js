import * as api from '../api';

//Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE_POST', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE_POST', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const currentIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'CURRENT_ID', payload: id });
  } catch (error) {
    console.log(error);
  }
};
