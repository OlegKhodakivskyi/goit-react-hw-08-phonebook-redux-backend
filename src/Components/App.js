import React, { Component, Suspense } from 'react';
// import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from '../routes/routes';
import PrivateRoutes from '../routes/PrivateRoutes';
import PublicRoutes from '../routes/PublicRoutes';

// import phoneBookOperations from '../redux/phoneBookActions/phoneBookOperations';
import phoneBookSelectors from '../redux/phoneBookActions/phoneBookSelectors';
import authOperations from '../redux/auth/authOperations';

import ContactForm from './Contacts/ContactForm';
import ContactFormList from './ContactFormList/ContactFormList';
// import Alert from './Alert/Alert';
import Filter from './Filter/Filter';
import Layout from './Layout/Layout';
import styles from './App.module.css';
// import stylesAlert from './Alert/Alert.module.css';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const { loading } = this.props;
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={loading && <h2>Loading ...</h2>}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoutes key={route.label} {...route} />
                ) : (
                  <PublicRoutes key={route.label} {...route} />
                ),
              )}
              {/* // ----------- ALert ----- */}
              {/* {alert && (
                <CSSTransition
                  classNames={stylesAlert}
                  in={true}
                  appear={true}
                  timeout={1500}
                  unmountOnExit
                >
                  <Alert alert={alert} />
                </CSSTransition>
              )} */}

              {/* // ----------- Phonebook ----- */}

              {/* <CSSTransition
                classNames={styles}
                in={true}
                appear={true}
                timeout={1500}
                unmountOnExit
              >
                <h1 className={styles.sectionTitle}>Phonebook</h1>
              </CSSTransition> */}

              {/* // ----------- Contact FORM ---- */}

              <ContactForm />
              <h2 className={styles.contactListTitle}>Contacts</h2>
              <Filter />
              <ContactFormList />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.contacts.alertSwitch);
  return {
    alert: phoneBookSelectors.getAlert(state),
    loading: phoneBookSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
