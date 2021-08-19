import React from 'react';
import { AuthRoute, ProtectedRoute, PatientProtectedRoute } from '../util/route_util';
import SignupPage from './session/signup_page';
import ChartsIndexContainer from './charts/charts_index_container';
import ChartShowContainer from './charts/chart_show_container'
import { Switch, Route } from 'react-router-dom';
import VisitShow from './visits/visit_show'
import LoginPageContainer from './patients/login_page_container';
import HomePageContainer from './home/home_page_container';
import PatientsIndexContainer from './patients/index_page_container';

//TESTING - start
import VisitsIndex from './visits/visits_index';
import ChartFormContainer from './charts/chart_form_container';
//TESTING -end

const App = () => (
    <div>
        <Switch>
            {/* TESTING ROUTES */}
            <ProtectedRoute exact path='/charts/:patientId/visits' component={VisitsIndex} />
            {/* END TESTING ROUTES */}
            <AuthRoute exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/patients/login" component={LoginPageContainer} />
            <AuthRoute exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/charts" component={ChartsIndexContainer} />
            <ProtectedRoute exact path='/charts/form' component={ChartFormContainer} />
            <PatientProtectedRoute exact path="/patients/home" component={PatientsIndexContainer} />
            <ProtectedRoute exact path='/charts/:patientId' component={ChartShowContainer} />
            <ProtectedRoute exact path='/charts/:patientId/:visitId' component={VisitShow} />
        </Switch>
    </div>
);

export default App;