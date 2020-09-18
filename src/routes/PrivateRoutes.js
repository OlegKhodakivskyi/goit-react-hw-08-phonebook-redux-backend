import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

function PrivateRoute({ component: MyComponent, isAuthenticated, ...rest }) {
  // console.log('isAuth', isAuthenticated);
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <MyComponent {...props} />
        ) : (
          <Redirect to="/register" />
        );
      }}
    />
  );
}

const mapStateToProps = state => {
  // console.log('state', state);
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};
export default connect(mapStateToProps)(PrivateRoute);
