import * as a from "../actions/actionTypes";
import initialState from "./initialState";

function clearAllUserMsgs(state) {
  return {
    ...state,
    errorCode: "",
    error: ""
  };
}

function userLoginSuccess(state) {
  return {
    ...state,
    ...action.userDetails
  };
}

function userLoginError(state, action) {
  return {
    ...state,
    loggedIn: false,
    errorCode: action.errorObj.errorCode,
    error: action.errorObj.error
  };
}

export default function user(state = initialState.user, action) {
  switch (action.type) {
    case a.CLEAR_ALL_USER_MSGS:
      return clearAllUserMsgs(state);
    case a.USER_LOGIN_SUCCESS:
      return userLoginSuccess(state);
    case a.USER_LOGIN_ERROR:
      return userLoginError(state, action);
    case a.USERS_LOGOUT:
      return initialState.user;
    default:
      return state;
  }
}
