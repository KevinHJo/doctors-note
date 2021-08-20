import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact, user }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the tweets page if the user is authenticated
      (user.role === 'patient') ? (
        <Redirect to="/patients/home" />
      ) : (
        <Redirect to="/charts" />
      )
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        (user.role === 'patient') ?  (
          <Redirect to="/patients/home" />
        ) : (
          <Component {...props} />
        )
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/" />
      )
    }
  />
);

const PatientProtected = ({ component: Component, loggedIn, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (loggedIn && (user.role === 'patient')) ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/patients/login" />
      )
    }
  />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const PatientProtectedRoute = withRouter(connect(mapStateToProps)(PatientProtected));