import React from 'react';
import moment from 'moment';

class AppointmentShow extends React.Component {
  render() {
    const patient = this.props.doctor.patients[this.props.appointment.patientId]
    return (
      <div id='appointment-show-container' onClick={this.props.toggleAppointmentShow}>
        <div id='appointment-show'>
          <div className='appointment-header'>
            <h2>Upcoming Appointment</h2>
            <p>with <strong>Dr. {this.props.doctor.lname}</strong> on <strong>{moment(this.props.appointment.date).format("MM/DD/YYYY")}</strong></p>
          </div>

          <div id='appointment-info-container'>
            <div id='appointment-info-row1'>
              <div className='appointment-show-info'>
                <h3>Patient: </h3>
                <p>{patient.fname + ' ' + patient.lname}</p>
              </div>

              <div className='appointment-show-info'>  
                <h3>Time: </h3>
                <p>{moment(this.props.appointment.date).format('hh:mm A')}</p>
              </div>
            </div>
          
            <div className='appointment-show-info'>
              <h3>For: </h3>
              <p>{this.props.appointment.purpose}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppointmentShow