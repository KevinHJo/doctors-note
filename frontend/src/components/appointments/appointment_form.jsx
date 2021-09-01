import React from 'react';
import moment from 'moment';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorId: this.props.doctor._id,
      patientId: null,
      date: this.props.date,
      purpose: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAppointment(this.state)
  }

  updateTime(e) {
    e.preventDefault();
    let date = moment(this.state.date)
    const time = e.target.value.split(':')
    date.set({h: time[0], m: time[1], s: 0});
    date = date.toDate()
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
    console.dir(this.state);
    return (
      <div id='appointment-form-container'>
        <form id='appointment-form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='appointment-form-name'>
            <label htmlFor="name">Patient Name:</label>
            <select id="name" onChange={this.updateName.bind(this)}>
              {Object.values(this.props.doctor.patients).map(patient => {
                return <option value={patient._id}>{patient.lname + ', ' + patient.fname}</option>
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

          <input id='appointment-form-submit' type="submit" value='Create Appointment'/>
        </form>
      </div>
      
    )
  }
}

export default AppointmentForm;