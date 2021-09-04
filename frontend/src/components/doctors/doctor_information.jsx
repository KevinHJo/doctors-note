import React from 'react'

export default class DoctorInformation extends React.Component {
  render() {
    if (!this.props.doctor) return null;

    return (
      <div className="doctor-info-section">
        <div className="doctor-info-title-section">
          <p className="doctor-info-title">Day at a glance</p>
        </div>
        <div className="doctor-info-appointment-section">
          <p className="doctor-info-appointment-header">Today's Appointments:</p>
          <div className="doctor-info-all-appointments">
          </div>
        </div>
      </div>
    )
  }
}
