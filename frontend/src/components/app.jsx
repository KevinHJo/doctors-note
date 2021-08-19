import React from 'react';
import { AuthRoute, ProtectedRoute, PatientProtectedRoute } from '../util/route_util';
import SignupPage from './session/signup_page';
import ChartsIndexContainer from './charts/charts_index_container';
import ChartShow from './charts/chart_show'
import { Switch, Route } from 'react-router-dom';
import VisitShow from './visits/visit_show'
import LoginPageContainer from './patients/login_page_container';
import HomePageContainer from './home/home_page_container';
import PatientsIndexContainer from './patients/index_page_container';

//TESTING - start
import VisitsIndex from './visits/visits_index';
//TESTING -end

const App = () => (
    <div>
        <Switch>
            {/* TESTING ROUTES */}
            <ProtectedRoute exact path='/charts/visits/:patientId' component={VisitsIndex} />
            {/* END TESTING ROUTES */}
            <AuthRoute exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/patients/login" component={LoginPageContainer} />
            <AuthRoute exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/charts" component={ChartsIndexContainer} />
            <PatientProtectedRoute exact path="/patients/home" component={PatientsIndexContainer} />
            <ProtectedRoute exact path='/charts/:patientId' component={ChartShow} />
            <ProtectedRoute exact path='/charts/:patientId/:visitId' component={VisitShow} />
        </Switch>
    </div>
);

export default App;