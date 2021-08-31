import React from 'react';
import TopNavBarContainer from '../navbar/top_nav_bar_container';
import VisitsIndex from '../visits/visits_index';
import { getAge } from '../../util/chart_util';
import { Link } from 'react-router-dom';

export default class ChartShow extends React.Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.patientId)
  }

  handleDelete = e => {
    this.props.deletePatient(this.props.patientId)
      .then(this.props.history.push('/'))
    // this.props.history.push('/') // push to charts index instead
  }

  render() {
    if (!this.props.patient) return null
    const { patient } = this.props
    return (
      <div id="charts-show">
        <TopNavBarContainer />
        <div id='spacer'></div>
        <div className="title">
          <p>Patient Chart: {patient.lname}, {patient.fname}</p>
        </div>
        <Link className="create" to={`/charts/${this.props.match.params.patientId}/visits/new`}>Click to Create New Visit</Link>
        <Link to={`/charts/${patient._id}/edit`} className="show-chart-edit-button show-chart-buttons">Edit Patient Information</Link>
        <button className="show-chart-delete-button show-chart-buttons" onClick={this.handleDelete}>Delete Patient</button>
        <div className='chart-patient-info'>
          <div>
            <p className="header">Patient Details</p>
            <div className="top-section sections">
              <div className="chart-patient-details">
                <p className="titles">First name: </p>
                <p className="descs">{patient.fname}</p>
              </div>
              <div className="chart-patient-details">
                <p className="titles">Last name: </p>
                <p className="descs">{patient.lname}</p>
              </div>
              <div className="chart-patient-details">
                <p className="titles">Age: </p>
                <p className="descs">{getAge(patient.dateOfBirth)}</p>
              </div>
              <div className="chart-patient-details">
                <p className="titles">Date of Birth:</p>
                <p className="descs">{new Date(patient.dateOfBirth).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</p>
              </div>
            </div>
            <div className="bottom-section sections">
              <div className="chart-patient-details">
                <p className="titles">Sex:</p>
                <p className="descs">{patient.sex}</p>
              </div>
              <div className="chart-patient-details">
                <p className="titles">Email: </p>
                <p className="descs">{patient.email}</p>
              </div>
              <div className="chart-patient-details">
                <p className="titles">Phone number:</p>
                <p className="descs">{patient.phone}</p>
              </div>
            </div>
            <div className="sections">
              <div className="chart-patient-details">
                <p className="titles">Address:</p>
                <p className="descs">{patient.address}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="header">Medical History</p>
            <div>
              <p className="titles">Diagnoses: </p>
              {patient.diagnoses.map(diagnosis => <p className="descs" key={patient.diagnoses.indexOf(diagnosis)}>{diagnosis}</p>)}
            </div>
            <div>
              <p className="titles">Medications:</p>
              {patient.medications.map(medication => <p className="descs">{medication}</p>)}
            </div>
            <div>
              <p className="titles">Allergies:</p>
              {patient.allergies.map(allergy => <p className="descs">{allergy}</p>)}
            </div>
          </div>
          <div>
            <p className="header">Recent Visits</p>
            <div id="chart-show-recent-visits">
              <VisitsIndex patient={patient} fetchPatient={this.props.fetchPatient}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
