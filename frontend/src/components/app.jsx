import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupPage from './session/signup_page';
import ChartsIndexContainer from './charts/charts_index';
import { Switch, Route } from 'react-router-dom';
import VisitShow from './visits/visit_show'
import LoginPage from './session/login_page';
import HomePageContainer from './home/home_page_container';
import NavBarContainer from './navbar/top_nav_bar_container';

//TESTING - start
import VisitsIndex from './visits/visits_index';
//TESTING -end

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/login" component={LoginPage} />
            <AuthRoute exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/charts" component={ChartsIndexContainer} />
            {/* <AuthRoute exact path='/charts/:patientId' component={ChartShow} /> */}
            <ProtectedRoute exact path='/charts/:patientId/:visitId' component={VisitShow} />

            {/* TESTING ROUTES */}
            <Route exact path='/charts/visits' component={VisitsIndex} />
        </Switch>
    </div>
);

export default App;