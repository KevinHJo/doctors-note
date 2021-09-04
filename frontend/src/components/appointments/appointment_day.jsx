import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class AppointmentDay extends React.Component {
  render() {
    if (!this.props.patients || !this.props.appointments) return null;
    
    let appointmentsCount = 0;
    let appointments = [];
    let appointmentObject = {};

    this.props.appointments.forEach((appointment) => {
      console.log(appointment)
      appointmentObject[(moment(appointment.date))] = {[appointment.patientId]: appointment.purpose}
    });

    console.log(Object.keys(appointmentObject))
    const sortedAppointmentTimes = Object.keys(appointmentObject).sort((a, b) => moment(a).unix() - moment(b).unix())

    sortedAppointmentTimes.forEach((appointment, idx) => {
      if (moment().format('YYYYMMDD') === moment(appointment).format('YYYYMMDD')) {
        appointmentsCount += 1;
        appointments.push(
          <div key={idx} className="quick-appointments">
            <Link
              className="appointment-details"
              to={`/charts/${Object.keys(appointmentObject[appointment])[0]}`}
              target="_blank"
            >
              {moment(appointment).format('h:mm a')}
            </Link>
            <Link
              className="appointment-details appointment-details-border"
              to={`/charts/${Object.keys(appointmentObject[appointment])[0]}`}
              target="_blank"
            >
              {this.props.patients[Object.keys(appointmentObject[appointment])[0]].fname} {this.props.patients[Object.keys(appointmentObject[appointment])[0]].lname}
            </Link>
            <Link
              className="appointment-details appointment-details-right"
              to={`/charts/${Object.keys(appointmentObject[appointment])[0]}`}
              target="_blank"
            >
              {Object.values(appointmentObject[appointment])[0]}
            </Link>
          </div>
        )
      }
    })

    if (appointmentsCount > 0) {
      appointments.push(
        <div className="quick-appointments">
          <p className="appointment-details-header">Time</p>
          <p className="appointment-details-header">Patient Name</p>
          <p className="appointment-details-header">Purpose</p>
        </div>
      )
    } else {
      appointments.push(
        <div className="no-appointments">
          <p>No scheduled appointments.</p>
        </div>
      )
    }
  
    return (
      <div className="daily-section">
        <div className="daily-title-section">
          <img
            src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/calendar.png"
            alt="calendar"
            className="daily-calendar-icon"
          ></img>
          <p className="daily-title">Day at a glance</p>
        </div>
        <div className="daily-appointment-section">
          <p className="daily-appointment-header">Today's Appointments:</p>
          <div className="daily-all-appointments">
            {appointments}
          </div>
        </div>
      </div>
    )
  }
}
