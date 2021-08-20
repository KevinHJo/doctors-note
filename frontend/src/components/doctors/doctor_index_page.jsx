import React from 'react'
import NavBarContainer from '../navbar/top_nav_bar_container';
import DoctorLeftNavigation from './doctor_left_navigation';
import ChartsIndexContainer from '../charts/charts_index_container';
import ChartFormContainer from '../charts/chart_form_container';
import ChartShowContainer from '../charts/chart_show_container';

export default class DoctorIndexPage extends React.Component {
  toggleAddChart() {
    document.getElementById("new-chart-page").classList.add("visible")
  }
  
  componentDidMount() {
    this.props.fetchDoctor(this.props.user.id)
    this.props.fetchAllPatients();
  }
  
  render() {
    let section;
    if (Object.values(this.props.modal)[0]) {
      switch (Object.keys(this.props.modal)[0]) {
        case "1":
          section = (
            <div id="doctor-section-user-info" className="doctor-homepage-sections">
              <p>Overview.</p>
              <p onClick={this.toggleAddChart}>Add New Chart</p>
              <ChartFormContainer />
            </div>
          )
          break;
        case "2":
          section = (
            <div id="doctor-section-user-info" className="doctor-homepage-sections">
              <ChartsIndexContainer receiveChart={this.props.receiveChart} toggleModal={this.props.toggleModal} />
            </div>
          )
          break;
        case "3":
          if (!this.props.patientId) return null;
          section = (
            <div id="doctor-section-user-info" className="doctor-homepage-sections">
              <ChartShowContainer patient={this.props.patientId} />
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
      <div>
        <NavBarContainer />
        <div id='spacer'></div>
        <DoctorLeftNavigation toggleModal={this.props.toggleModal} modal={this.props.modal} />
        {section}
      </div>
    )
  }
}
