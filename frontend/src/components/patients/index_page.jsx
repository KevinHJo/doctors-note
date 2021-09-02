import React from 'react';
import NavBarContainer from '../navbar/top_nav_bar_container';
import LeftNavigation from './left_navigation';
import MedicalHistory from './medical_history';
import Visits from './visits';
import PatientAppointmentsIndex from '../appointments/patient_appointments_index';
import UserInformation from './user_information';

export default class IndexPage extends React.Component {
  componentDidMount() {
    this.props.fetchDoctor(this.props.doctorId)
    this.props.fetchPatientAppointments(this.props.user.id);
  }
  
  render() {
    if (!this.props.doctor) return null;
    let section = '';
    if (Object.values(this.props.modal)[0]) {
      switch (Object.keys(this.props.modal)[0]) {
        case "1":
          section = (
            <div id="patient-section-user-info" className="patient-homepage-sections">
              <UserInformation user={this.props.user} doctor={this.props.doctor} updatePatient={this.props.updatePatient} receiveCurrentUser={this.props.receiveCurrentUser} />
            </div>
          )
          break;
        case "2":
          section = (
            <div id="patient-section-appointments" className="patient-homepage-sections">
              <PatientAppointmentsIndex user={this.props.user} fetchPatientAppointments={this.props.fetchPatientAppointments} deleteAppointment={this.props.deleteAppointment} appointments={this.props.appointments}/>
            </div>
          )
          break;
        case "3":
          section = (
            <div id="patient-section-visits" className="patient-homepage-sections">
              <Visits user={this.props.user} />
            </div>
          )
          break;
        case "4":
          section = (
            <div id="patient-section-medical-history" className="patient-homepage-sections">
              <MedicalHistory user={this.props.user} />
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
