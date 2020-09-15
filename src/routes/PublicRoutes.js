import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

function PublicRoute({ component: MyComponent, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated && rest.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <MyComponent {...props} />
        );
      }}
    />
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
