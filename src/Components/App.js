import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import phoneBookOperations from "../redux/phoneBookActions/phoneBookOperations";
import phoneBookSelectors from "../redux/phoneBookActions/phoneBookSelectors";
import ContactForm from "./Contacts/ContactForm";
import ContactFormList from "./ContactFormList/ContactFormList"
import Alert from "./Alert/Alert";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";
import stylesAlert from "./Alert/Alert.module.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const { alert, loading } = this.props;
    return (
      <>
        {loading && <h2>LOADING ...</h2>}
        {/* ----------- ALert ----- */}
        {alert && (
          <CSSTransition
            classNames={stylesAlert}
            in={true}
            appear={true}
            timeout={1500}
            unmountOnExit
          >
            <Alert alert={alert} />
          </CSSTransition>
        )}

        {/* ----------- Phonebook ----- */}

        <CSSTransition
          classNames={styles}
          in={true}
          appear={true}
          timeout={1500}
          unmountOnExit
        >
          <h1 className={styles.sectionTitle}>Phonebook</h1>
        </CSSTransition>

        {/* ----------- Contact FORM ----- */}

        <ContactForm />
        <h2 className={styles.contactListTitle}>Contacts</h2>
        <Filter />
        <ContactFormList />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.contacts.alertSwitch);
  return {
    alert: phoneBookSelectors.getAlert(state),
    loading: phoneBookSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: phoneBookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
