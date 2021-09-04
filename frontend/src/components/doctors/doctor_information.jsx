import React from 'react'
import moment from 'moment';

export default class DoctorInformation extends React.Component {
  render() {
    if (!this.props.doctor) return null;

    return (
      <div className="doctor-info-section">
        <div className="doctor-info-section1">
          <label className="doctor-info-section1-labels">Full Name
            <input disabled type="text" className="doctor-info-section1-inputs" defaultValue={`${this.props.doctor.fname} ${this.props.doctor.lname}`}></input>
          </label>
          <label className="doctor-info-section1-labels">Email
            <input disabled type="text" className="doctor-info-section1-inputs" defaultValue={`${this.props.doctor.email}`}></input>
          </label>
          <label className="doctor-info-section1-labels">Username
            <input disabled type="text" className="doctor-info-section1-inputs" defaultValue={`${this.props.doctor.username}`}></input>
          </label>
          <label className="doctor-info-section1-labels">Role
            <input disabled type="text" className="doctor-info-section1-inputs" defaultValue={`${this.props.doctor.role}`}></input>
          </label>
        </div>
        <div className="doctor-info-section2">
          <label className="doctor-info-section2-labels">Hospital name
            <input disabled type="text" className="doctor-info-section2-inputs" defaultValue={`${this.props.doctor.dba}`}></input>
          </label>
          <label className="doctor-info-section2-labels">Total patients
            <input disabled type="text" className="doctor-info-section2-inputs" defaultValue={`${Object.values(this.props.doctor.patients).length}`}></input>
          </label>
          <label className="doctor-info-section2-labels">Registered since
            <input disabled type="text" className="doctor-info-section2-inputs" defaultValue={`${moment(this.props.doctor.createdAt).format("YYYY, MM/DD")}`}></input>
          </label>
        </div>
      </div>
    )
  }
}
