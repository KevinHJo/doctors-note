import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupPage from './session/signup_page';
import ChartsIndexContainer from './charts/charts_index';
import { Switch } from 'react-router-dom';
import LoginPage from './session/login_page';
import HomePageContainer from './home/home_page_container';
import NavBarContainer from './navbar/top_nav_bar_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/login" component={LoginPage} />
            <AuthRoute exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/charts" component={ChartsIndexContainer} />
            {/* <AuthRoute exact path='/charts/:patientId' component={ChartShow} /> */}
            {/* <AuthRoute exact path='/charts/:patientId/:visitId' component={VisitShow} /> */}
        </Switch>
    </div>
);

export default App;