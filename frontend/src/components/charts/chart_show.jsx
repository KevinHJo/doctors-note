import React from 'react'
import VisitsIndex from '../visits/visits_index'

export default class ChartShow extends React.Component {
  render() {
    const { patient } = this.props.location.state
    return (
      <div>
        <div className='chart-patient-info'>
          <div><p>First name: </p>{patient.fname}</div>
          <div><p>Last name: </p>{patient.lname}</div>
          <div><p>Age: </p>(calculate age based on dateOfBirth)</div>
          <div><p>Date of Birth: </p>{patient.dateOfBirth}</div>
          <div><p>Sex: </p>{patient.sex}</div>
          <div><p>Email: </p>{patient.email}</div>
          <div><p>Phone number: </p>{patient.phone}</div>
          <div><p>Address: </p>{patient.address}</div>
          <div><p>Diagnoses: </p>(map diagnoses)</div>
          <div><p>Medications: </p>(map meds)</div>
          <div><p>Allergies: </p>(map allergies)</div>
        </div>
        <div>
          <VisitsIndex patient={patient} />
        </div>
      </div>
    )
  }
}
