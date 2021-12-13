import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = (userInfo, history) => async (dispatch) => {
  try {
    // const { data } = await api.fetchPosts();
    // dispatch({
    //   type: AUTH,
    //   payload: data,
    // });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (newUserInfo, history) => async (dispatch) => {
  try {
    // const { data } = await api.fetchPosts();
    // dispatch({
    //   type: AUTH,
    //   payload: data,
    // });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const logout = (id) => async (dispatch) => {
  try {
    // const { data } = await api.fetchPosts();
    // dispatch({
    //   type: AUTH,
    //   payload: data,
    // });
  } catch (error) {
    console.log(error);
  }
};
