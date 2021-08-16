import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupPage from './session/signup_page'
import { Switch } from 'react-router-dom';

import LoginPage from './session/login_page';
import HomePage from './home/home_page';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={HomePage} />
        <AuthRoute exact path="/login" component={LoginPage} />
        <AuthRoute exact path="/signup" component={SignupPage} />
    </Switch>
);

export default App;