import authActionType from "./authTypes";

const registerRequest = () => ({
  type: authActionType.REGISTER_REQUEST,
});
const registerSuccess = (userData) => ({
  type: authActionType.REGISTER_SUCCESS,
  payload: { ...userData },
});
const registerError = (error) => ({
  type: authActionType.REGISTER_ERROR,
  payload: error,
});

const loginRequest = () => ({
  type: authActionType.LOGIN_REQUEST,
});
const loginSuccess = (userData) => ({
  type: authActionType.LOGIN_SUCCESS,
  payload: userData,
});
const loginError = (error) => ({
  type: authActionType.LOGIN_ERROR,
  payload: error,
});

const logoutSuccess = () => ({
  type: authActionType.LOGOUT_SUCCESS,
});

const getCurrentUserRequest = (token) => ({
  type: authActionType.GET_CURRENT_USER_REQUEST,
  payload: token,
});
const getCurrentUserSuccess = (token) => ({
  type: authActionType.GET_CURRENT_USER_SUCCESS,
  payload: token,
});
const getCurrentUserError = (token) => ({
  type: authActionType.GET_CURRENT_USER_ERROR,
  payload: token,
});

export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  logoutSuccess,

  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
