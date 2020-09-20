import phoneBookActionsTypes from './phoneBookActionTypes';

const filter = filter => {
  // console.log(filter);
  return {
    type: phoneBookActionsTypes.FILTER,
    payload: {
      filter,
    },
  };
};

const duplicate = () => ({
  type: phoneBookActionsTypes.DUPLICATE,
});

// ------ ADD ------

const addContactRequest = () => {
  return {
    type: phoneBookActionsTypes.ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = contacts => {
  // console.log(contacts);
  return {
    type: phoneBookActionsTypes.ADD_CONTACT_SUCCESS,
    payload: {
      ...contacts,
    },
  };
};

const addContactError = error => {
  return {
    type: phoneBookActionsTypes.ADD_CONTACT_ERROR,
    payload: { error },
  };
};

// -------- FETCH -------

const fetchContactRequest = () => {
  return {
    type: phoneBookActionsTypes.FETCH_CONTACT_REQUEST,
  };
};

const fetchContactSuccess = contacts => {
  return {
    type: phoneBookActionsTypes.FETCH_CONTACT_SUCCESS,
    payload: contacts,
  };
};

const fetchContactError = error => {
  return {
    type: phoneBookActionsTypes.FETCH_CONTACT_ERROR,
    payload: { error },
  };
};

// ------ REMOVE ------

const removeContactRequest = () => {
  return {
    type: phoneBookActionsTypes.DEL_CONTACT_REQUEST,
  };
};

const removeContactSuccess = id => {
  // console.log(id);
  return {
    type: phoneBookActionsTypes.DEL_CONTACT_SUCCESS,
    payload: id,
  };
};

const removeContactError = error => {
  return {
    type: phoneBookActionsTypes.DEL_CONTACT_ERROR,
    payload: { error },
  };
};

export default {
  filter,
  duplicate,

  addContactRequest,
  addContactSuccess,
  addContactError,

  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  removeContactError,
  removeContactSuccess,
  removeContactRequest,
};
