import { combineReducers } from 'redux';
import phoneBookActionsTypes from './phoneBookActionTypes';

const items = (state = [], { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case phoneBookActionsTypes.ADD_CONTACT_SUCCESS:
      return [...state, payload];

    case phoneBookActionsTypes.FETCH_CONTACT_SUCCESS:
      return payload;

    case phoneBookActionsTypes.DEL_CONTACT_SUCCESS:
      console.log(state);
      // console.log(items);
      return state.filter(contacts => contacts.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.FILTER:
      // console.log("filter");
      return payload.filter;

    default:
      return state;
  }
};

const alertSwitch = (state = false, { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.DUPLICATE:
      return !state;

    default:
      return state;
  }
};

const loading = (state = false, { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.ADD_CONTACT_REQUEST:
    case phoneBookActionsTypes.FETCH_CONTACT_REQUEST:
    case phoneBookActionsTypes.DEL_CONTACT_REQUEST:
      return true;

    case phoneBookActionsTypes.ADD_CONTACT_SUCCESS:
    case phoneBookActionsTypes.ADD_CONTACT_ERROR:
    case phoneBookActionsTypes.FETCH_CONTACT_SUCCESS:
    case phoneBookActionsTypes.FETCH_CONTACT_ERROR:
    case phoneBookActionsTypes.DEL_CONTACT_SUCCESS:
    case phoneBookActionsTypes.DEL_CONTACT_ERROR:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.ADD_CONTACT_ERROR:
    case phoneBookActionsTypes.FETCH_CONTACT_ERROR:
    case phoneBookActionsTypes.DEL_CONTACT_ERROR:
      return payload;

    case phoneBookActionsTypes.ADD_CONTACT_REQUEST:
    case phoneBookActionsTypes.FETCH_CONTACT_REQUEST:
    case phoneBookActionsTypes.DEL_CONTACT_REQUEST:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ items, filter, alertSwitch, loading, error });
