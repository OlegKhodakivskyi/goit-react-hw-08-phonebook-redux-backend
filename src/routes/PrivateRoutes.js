import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: MyComponent, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuth ? (
          <MyComponent {...props} />
        ) : (
          <Redirect to="/register" />
        );
      }}
    />
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.onAuth.token,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
