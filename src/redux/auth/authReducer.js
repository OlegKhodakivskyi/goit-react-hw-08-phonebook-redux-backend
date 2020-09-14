import authActionType from "./authTypes";
import { combineReducers } from "redux";

const initialState = {
  email: "",
  token: "",
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case authActionType.REGISTER_REQUEST:
      return { ...state };

    case authActionType.REGISTER_SUCCESS:
      return { ...state, ...payload };

    case authActionType.REGISTER_ERROR:
      return payload;

    case authActionType.LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};

const logInReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case authActionType.LOGIN_REQUEST:
      return { ...state };

    case authActionType.LOGIN_SUCCESS:
      return { ...state, ...payload };

    case authActionType.LOGIN_ERROR:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  onAuth: authReducer,
  onLogIn: logInReducer,
});
