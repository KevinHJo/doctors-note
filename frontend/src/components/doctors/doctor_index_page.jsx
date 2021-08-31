import React from 'react'
import NavBarContainer from '../navbar/top_nav_bar_container';
import DoctorLeftNavigation from './doctor_left_navigation';
import ChartsIndexContainer from '../charts/charts_index_container';
import ChartFormContainer from '../charts/chart_form_container';
import CalendarContainer from '../appointments/calendar_container'

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
    let section;
    if (Object.values(this.props.modal)[0]) {
      switch (Object.keys(this.props.modal)[0]) {
        case "1":
          section = (
            <div id="doctor-section-user-info" className="doctor-homepage-sections">
              <p className="doctor-section-user-title">{`${`${new Date()}`.split(" ").splice(0, 4).join(" ")}`}</p>
              <div className="revealAddChart" onClick={this.toggleAddChart}>
                <img alt="plus" className="plus-chart-icon" src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/add.png" />
                Add New Chart
              </div>
              <ChartFormContainer />
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
            <div id="doctor-section-user-info" className="doctor-homepage-sections">
              {/* <ChartShowContainer patient={this.props.patientId} /> */}
              {/* <p>No Appointments yet.</p> */}
              <CalendarContainer doctor={this.props.doctor}/>
            </div>
          )
          break;
        case "4":
          section = (
            <div id="doctor-section-medical-history" className="doctor-homepage-sections">
              <p>Doctor Info.</p>
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
