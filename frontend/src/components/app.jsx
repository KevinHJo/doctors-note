import React from 'react';
import { AuthRoute, ProtectedRoute, PatientProtectedRoute } from '../util/route_util';
import SignupPage from './session/signup_page';
import ChartsIndexContainer from './charts/charts_index';
import { Switch, Route } from 'react-router-dom';
import VisitShow from './visits/visit_show'
import LoginPageContainer from './patients/login_page_container';
import HomePageContainer from './home/home_page_container';
import PatientsIndexContainer from './patients/index_page_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/patients/login" component={LoginPageContainer} />
            <AuthRoute exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/charts" component={ChartsIndexContainer} />
            <PatientProtectedRoute exact path="/patients/home" component={PatientsIndexContainer} />
            {/* <AuthRoute exact path='/charts/:patientId' component={ChartShow} /> */}
            {<AuthRoute exact path='/charts/:patientId/:visitId' component={VisitShow} />}
        </Switch>
    </div>
);

export default App;