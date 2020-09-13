import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phoneBookOperations from "../../redux/phoneBookActions/phoneBookOperations";
import phoneBookActions from "../../redux/phoneBookActions/phoneBookActions";
import phoneBookSelectors from "../../redux/phoneBookActions/phoneBookSelectors";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.duplicateFn()) {
      this.props.onAlert();
      setTimeout(() => {
        this.props.onAlert();
      }, 1500);
    } else {
      this.props.onAddContact({ ...this.state });
      this.setState({ name: "", number: "" });
    }
  };

  duplicateFn = () => {
    return this.props.contacts.some(
      (contacts) =>
        contacts.name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state, "stateFOrm");

  return {
    contacts: phoneBookSelectors.getContacts(state),
  };
};

const mapDispatchToProps = {
  onAddContact: phoneBookOperations.onAddContact,
  onAlert: phoneBookActions.duplicate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};
