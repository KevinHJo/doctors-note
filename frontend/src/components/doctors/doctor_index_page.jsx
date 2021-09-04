import React from 'react'
import NavBarContainer from '../navbar/top_nav_bar_container';
import DoctorLeftNavigation from './doctor_left_navigation';
import ChartsIndexContainer from '../charts/charts_index_container';
import ChartFormContainer from '../charts/chart_form_container';
import CalendarContainer from '../appointments/calendar_container';
import AppointmentDayContainer from '../appointments/appointment_day_container';
import DoctorInformation from '../doctors/doctor_information';

export default class DoctorIndexPage extends React.Component {
  toggleAddChart() {
    document.getElementById("new-chart-page").classList.add("visible")
  }

  componentDidMount() {
    this.props.fetchDoctor(this.props.user.id);
    this.props.fetchDoctorAppointments(this.props.user.id);
    
    // this.props.fetchDoctorPatients(this.props.user.id)
  }

  render() {
    if (!this.props.doctor) return null;
    let section;
    if (Object.values(this.props.modal)[0]) {
      switch (Object.keys(this.props.modal)[0]) {
        case "1":
          section = (
            <div id="doctor-section-user-info" className="doctor-homepage-sections">
              <ChartFormContainer />
              <p className="doctor-section-user-title">{new Date().toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</p>
              {/* <p className="doctor-section-user-title">{`${`${new Date()}`.split(" ").splice(0, 4).join(" ")}`}</p> */}
              <div className="overview-sections">
                <AppointmentDayContainer patients={this.props.doctor.patients} />
                <div className="quick-links-section">
                  <div className="quick-links-title-section">
                    <img
                      src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/medical-records.png"
                      alt="new patient chart icon"
                      className="new-patient-chart-icon"
                    >
                    </img>
                    <p className="new-patient-title">Add a patient</p>
                  </div>
                  <div className="quick-links-buttons">
                    <div className="revealAddChart" onClick={this.toggleAddChart}>
                      <img alt="plus" className="plus-chart-icon" src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/add.png" />
                      Add New Chart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          break;
        case "2":
          section = (
            <div id="doctor-section-all-charts" className="doctor-homepage-sections">
              <p className="title">Patient Charts</p>
              <ChartsIndexContainer receiveChart={this.props.receiveChart} toggleModal={this.props.toggleModal} />
            </div>
          )
          break;
        case "3":
          // if (!this.props.patientId) return null;
          section = (
            <div id="doctor-section-appointments" className="doctor-homepage-calendar">
              {/* <ChartShowContainer patient={this.props.patientId} /> */}
              {/* <p>No Appointments yet.</p> */}
              <CalendarContainer doctor={this.props.doctor}/>
            </div>
          )
          break;
        case "4":
          section = (
            <div id="doctor-section-medical-history" className="doctor-homepage-sections">
              <p className="doctor-info-section-title">Doctor Information</p>
              <DoctorInformation doctor={this.props.doctor}/>
            </div>
          )
        break;
        default:
          return;
      }
    }
    return (
      <div id="main-doctors-home">
        <NavBarContainer />
        <div id='spacer'></div>
        <DoctorLeftNavigation toggleModal={this.props.toggleModal} modal={this.props.modal} />
        {section}
      </div>
    )
  }
}
