import * as a from "./actionTypes";
import { loadingStart, loadingStop } from "./loadingActions";
import UsersAPI from "../api/userAPI";

export function clearAllUserMsgs() {
  return { type: a.CLEAR_ALL_USER_MSGS };
}
export function validateLoginSuccess(userDetails) {
  return { type: a.USER_LOGIN_SUCCESS, userDetails };
}

export function validateLoginError(errorObj) {
  return { type: a.USER_LOGIN_ERROR, errorObj };
}

export function validateLogin(user) {
  return async dispatch => {
    try {
      dispatch(loadingStart());
      const userDetails = await UsersAPI.validateLogin(user);
      dispatch(loadingStop());
      dispatch(validateLoginSuccess(userDetails));
    } catch (errorObj) {
      dispatch(loadingStop());
      dispatch(validateLoginError(errorObj));
    }
  };
}
