import React from 'react';
import TopNavBarContainer from '../navbar/top_nav_bar_container';
import VisitsIndex from '../visits/visits_index';
import { getAge } from '../../util/chart_util';
import { Link } from 'react-router-dom';

export default class ChartShow extends React.Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.patientId)
  }

  render() {
    if (!this.props.patient) return null
    const { patient } = this.props
    return (
      <div>
        <TopNavBarContainer />
        <div id='spacer'></div>
        <div className='chart-patient-info'>
          <div><p>First name: </p>{patient.fname}</div>
          <div><p>Last name: </p>{patient.lname}</div>
          <div><p>Age: </p>{getAge(patient.dateOfBirth)}</div>
          <div><p>Date of Birth: </p>{new Date(patient.dateOfBirth).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
          <div><p>Sex: </p>{patient.sex}</div>
          <div><p>Email: </p>{patient.email}</div>
          <div><p>Phone number: </p>{patient.phone}</div>
          <div><p>Address: </p>{patient.address}</div>
          <div><p>Diagnoses: </p>{patient.diagnoses.map(diagnosis => <p key={patient.diagnoses.indexOf(diagnosis)}>{diagnosis}</p>)}</div>
          <div><p>Medications: </p>{patient.medications.map(medication => <p>{medication}</p>)}</div>
          <div><p>Allergies: </p>{patient.allergies.map(allergy => <p>{allergy}</p>)}</div>
        </div>
        <div>
          <VisitsIndex patient={patient} fetchPatient={this.props.fetchPatient}/>
          <Link to={`/charts/${this.props.match.params.patientId}/visits/new`}>Create New Visit</Link>
        </div>
        <Link to={`/charts/${patient._id}/edit`}>Edit Patient Information</Link>
        {/* <button>Delete Patient</button> */}
      </div>
    )
  }
}
