import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBookActions/phoneBookOperations';
import phoneBookActions from '../../redux/phoneBookActions/phoneBookActions';
import phoneBookSelectors from '../../redux/phoneBookActions/phoneBookSelectors';
import ContactFormList from '../ContactFormList/ContactFormList';
import authOperations from '../../redux/auth/authOperations';
import styles from '../App.module.css';
import Alert from '../Alert/Alert';
import stylesAlert from '../Alert/Alert.module.css';

class ContactsPage extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    this.props.onGetCurrentUser();
    this.props.fetchContacts();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.duplicateFn()) {
      console.log('hi');
      this.props.onAlert();
      setTimeout(() => {
        this.props.onAlert();
      }, 1500);
    } else {
      this.props.onAddContact({ ...this.state });
      this.setState({ name: '', number: '' });
    }
  };

  duplicateFn = () => {
    return this.props.contacts.some(
      contacts => contacts.name.toLowerCase() === this.state.name.toLowerCase(),
    );
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Alert alert={alert} />

        <h2 className={styles.contactListTitle}>Contacts</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name">
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>

          <label>
            Number:
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>

          <button type="submit"> Add contact</button>
        </form>
        <ContactFormList />
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state, 'ContactPage');

  return {
    contacts: phoneBookSelectors.getContacts(state),
    // alert: phoneBookSelectors.getAlert(state),
  };
};

const mapDispatchToProps = {
  onAddContact: phoneBookOperations.onAddContact,
  onAlert: phoneBookActions.duplicate,
  onGetCurrentUser: authOperations.getCurrentUser,
  fetchContacts: phoneBookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

ContactsPage.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};
