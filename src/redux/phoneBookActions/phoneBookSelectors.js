import { createSelector } from "reselect";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getAlert = (state) => state.contacts.alertSwitch;

const getContacts = (state) => {
  return state.contacts.items;
};

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      // contact.name &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getLoading,
  getFilter,
  getAlert,
  getFilteredContacts,
  getContacts,
};
