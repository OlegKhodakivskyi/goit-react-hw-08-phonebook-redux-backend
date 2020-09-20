import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
// import ContactsPage from '../pages/Contacts';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {name}</span>
    {/* <ContactsPage /> */}
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
