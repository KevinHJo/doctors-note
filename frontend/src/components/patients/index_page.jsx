import React from 'react';
import NavBarContainer from '../navbar/top_nav_bar_container';
import LeftNavigation from './left_navigation';
import MedicalHistory from './medical_history';
import Visits from './visits';
import Appointments from './appointments';
import UserInformation from './user_information';

export default class IndexPage extends React.Component {
  render() {
    let section = '';
    if (Object.values(this.props.modal)[0]) {
      switch (Object.keys(this.props.modal)[0]) {
        case "1":
          section = (
            <div id="patient-section-user-info" className="patient-homepage-sections">
              <UserInformation user={this.props.user} />
            </div>
          )
          break;
        case "2":
          section = (
            <div id="patient-section-appointments" className="patient-homepage-sections">
              <Appointments />
            </div>
          )
          break;
        case "3":
          section = (
            <div id="patient-section-visits" className="patient-homepage-sections">
              <Visits />
            </div>
          )
          break;
        case "4":
          section = (
            <div id="patient-section-medical-history" className="patient-homepage-sections">
              MedicalHistory
            </div>
          )
          break;
        default:
          return;
      }
    }

    return (
      <div id="patient-home-page">
        <NavBarContainer pageDir="Patient Portal." />
        <LeftNavigation toggleModal={this.props.toggleModal} modal={this.props.modal} />
        <div id="spacer"></div>
        {section}
      </div>
    )
  }
}
