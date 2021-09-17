import { AUTH, ERROR } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
    // dispatch({ type: ERROR, data: { errMsg: error.response.data.message } });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
    // dispatch({ type: ERROR, data: { errMsg: error.response.data.message } });
  }
};
