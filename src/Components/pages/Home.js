import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from '../App.module.css';

const HomePage = ({ token }) => (
  <>
    <CSSTransition
      classNames={styles}
      in={true}
      appear={true}
      timeout={1500}
      unmountOnExit
    >
      <h1
      // className={styles.sectionTitle}
      >
        Phonebook
      </h1>
    </CSSTransition>
    {!token && (
      <div>
        <h1>
          Welcome to your personal on-line contacts keeper!
          <span> Please, log-in to continue!</span>
        </h1>
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  // console.log(state.auth.token);
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(HomePage);
