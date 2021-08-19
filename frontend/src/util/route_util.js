import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact, role }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the tweets page if the user is authenticated
      (role === 'patient') ? (
        <Redirect to="/patients/home" />
      ) : (
        <Redirect to="/charts" />
      )
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, role, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (role === 'patient') ? (
        <Redirect to="/patients/home" />
      ) : (
        loggedIn ? (
          <Component {...props} />
        ) : (
          // Redirect to the login page if the user is already authenticated
          <Redirect to="/login" />
        )
      )
    }
  />
);

const PatientProtected = ({ component: Component, loggedIn, role, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (loggedIn && (role === 'patient')) ? (
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
  role: state.session.role,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const PatientProtectedRoute = withRouter(connect(mapStateToProps)(PatientProtected));