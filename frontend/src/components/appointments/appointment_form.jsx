import React from 'react';
import moment from 'moment';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorId: this.props.doctor._id,
      patientId: null,
      date: moment(this.props.date),
      purpose: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAppointment({
      doctorId: this.state.doctorId,
      patientId: this.state.patientId,
      date: this.state.date.toDate(),
      purpose: this.state.purpose
    });
  }

  updateTime(e) {
    e.preventDefault();
    let date = this.state.date;
    const time = e.target.value.split(':')
    date.set({h: time[0], m: time[1], s: 0});
    this.setState({date})
  }

  updateName(e) {
    e.preventDefault();
    this.setState({patientId: e.target.value})
  }

  updatePurpose(e) {
    e.preventDefault();
    this.setState({purpose: e.target.value})
  }

  render() {
    return (
      <div id='appointment-form-container' onClick={this.props.toggleAppointmentForm}>
        <form id='appointment-form' onSubmit={this.handleSubmit.bind(this)} onClick={e => e.stopPropagation()}>
          <div className='appointment-header'>
            <h2>Create an Appointment</h2>
            <p>with <strong>Dr. {this.props.doctor.lname}</strong> on <strong>{this.state.date.format("MM/DD/YYYY")}</strong></p>
          </div>

          <div className='appointment-form-name'>
            <label htmlFor="name">Patient Name:</label>
            <select id="name" onChange={this.updateName.bind(this)} defaultValue={'Select a Patient'} required>
              <option key={'selectapatient'} disabled>Select a Patient</option>
              {Object.values(this.props.doctor.patients).map((patient, i) => {
                return <option key={i} value={patient._id}>{patient.lname + ', ' + patient.fname}</option>
              })}
            </select>
          </div>
          
          <div className='appointment-form-date'>
            <label htmlFor="time">Appointment Time:</label>
            <input type="time" id="time" onChange={this.updateTime.bind(this)}/>
          </div>

          <div className='appointment-form-purpose'>
            <label htmlFor="purpose">Purpose for Visit:</label>
            <textarea id='purpose' onChange={this.updatePurpose.bind(this)}/>
          </div>
            
          <div id='appointment-form-controls'>
            <input id='appointment-form-submit' type="submit" value='Create Appointment'/>
            <button id='appointment-form-cancel' onClick={this.props.toggleAppointmentForm}>Cancel</button>
          </div>
        </form>
      </div>
      
    )
  }
}

export default AppointmentForm;