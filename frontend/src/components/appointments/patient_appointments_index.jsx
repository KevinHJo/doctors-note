import React from 'react';
import moment from 'moment';

class PatientAppointmentsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmation: false
    }

    this.renderConfirmation = this.renderConfirmation.bind(this);
  }

  handleDelete(e, appointmentId) {
    e.preventDefault();
    this.props.deleteAppointment(appointmentId)
  }

  toggleConfirmation(e) {
    this.setState({showConfirmation: !this.state.showConfirmation})
  }

  renderConfirmation(appointment) {
    if(!this.state.showConfirmation) {
      return (
        <button id='patient-appointment-cancel' onClick={this.toggleConfirmation.bind(this)}>Cancel Appointment</button>
      )
    } else {
      return (
        <div id='appointment-cancel-menu'>
          <h4>Are you sure?</h4>
          <button id='appointment-cancel-yes' onClick={e => this.handleDelete(e, appointment._id)}>Yes</button>
          <button id='appointment-cancel-no' onClick={this.toggleConfirmation.bind(this)}>No</button>
        </div>
      )
    }
  }
  
  render() {
    const {appointments, user} = this.props
    appointments.sort((a, b) => (new Date(a.date).getTime() / 1000) - (new Date(b.date).getTime() / 1000))
    if(!appointments.length) {
      return (
        <div>
          <div>You have no upcoming appointments</div>
        </div>
      )
    } else {
      return (
        <div id='patient-appointments-index'>
          <div id='patient-appointments-header'>
            <h2>{user.fname + ' ' + user.lname} has upcoming appointments on</h2>
          </div>

          <div id='patient-appointments-list'>
            {
              appointments.map((appointment, i) => {
                return (
                  <li key={i} className='patient-appointment'>
                    <div className='patient-appointment-section1'>
                      <p><strong>{moment(appointment.date).format('MM/DD/YYYY')}</strong></p>
                    </div>

                    <div className='patient-appointment-section2'>
                      <p>{appointment.purpose}</p>
                    </div>

                    <div className='patient-appointment-section3'>
                      {this.renderConfirmation(appointment)}
                    </div>
                  </li>
                )
              })
            }
          </div>
        </div>
      )
    }
    
  }
}

export default PatientAppointmentsIndex