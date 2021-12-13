import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = (userInfo, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signin(userInfo);

    dispatch({
      type: AUTH,
      data,
    });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (newUserInfo, navigate) => async (dispatch) => {
  try {
    console.log(newUserInfo);

    const { data } = await api.signup(newUserInfo);

    dispatch({
      type: AUTH,
      data,
    });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
