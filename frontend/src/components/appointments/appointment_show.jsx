import React from 'react';
import moment from 'moment';

class AppointmentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.appointment._id,
      doctorId: this.props.appointment.doctorId,
      patientId: this.props.appointment.patientId,
      date: moment(this.props.appointment.date),
      purpose: this.props.appointment.purpose,
      editing: false
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing})
  }

  handleSave(e) {
    e.preventDefault();
    this.props.updateAppointment({
      _id: this.state._id,
      doctorId: this.state.doctorId,
      patientId: this.state.patientId,
      date: this.state.date.toDate(),
      purpose: this.state.purpose
    })
  }

  handleDelete() {
    this.props.deleteAppointment(this.props.appointment._id)
  }

  updateName(e) {
    e.preventDefault();
    this.setState({patientId: e.target.value})
  }

  updateDate(e) {
    e.preventDefault();
    let date = this.state.date;
    const year = parseInt(e.target.value.slice(0,4))
    const month = parseInt(e.target.value.slice(5,7)) - 1
    const day = parseInt(e.target.value.slice(8,10))
    date.set({year, month, date: day});
    this.setState({date})
  }

  updateTime(e) {
    e.preventDefault();
    let date = this.state.date;
    const time = e.target.value.split(':')
    date.set({h: time[0], m: time[1], s: 0});
    this.setState({date})
  }

  updatePurpose(e) {
    e.preventDefault();
    this.setState({purpose: e.target.value})
  }

  render() {
    const patient = this.props.doctor.patients[this.props.appointment.patientId]

    if (!this.state.editing) {
      return (
        <div id='appointment-show-container' onClick={this.props.toggleAppointmentShow}>
          <div id='appointment-show' onClick={e => e.stopPropagation()}>
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

            <div id='appointment-info-controls'>
              <button id='appointment-edit-button' onClick={this.toggleEditing}>Edit Appointment</button>
              <button id='appointment-cancel-button' onClick={this.handleDelete}>Cancel Appointment</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div id='appointment-show-container' onClick={this.props.toggleAppointmentShow}>
          <div id='appointment-show' onClick={e => e.stopPropagation()}>
            <div className='appointment-header'>
              <h2>Upcoming Appointment</h2>
              <p>with <strong>Dr. {this.props.doctor.lname}</strong> on <strong><input type="date" onChange={this.updateDate.bind(this)} defaultValue={moment(this.props.appointment.date).format("YYYY-MM-DD")}/></strong></p>
            </div>

            <div id='appointment-info-container'>
              <div id='appointment-info-row1'>
                <div className='appointment-show-info'>
                  <h3>Patient: </h3>
                  <select id="name" onChange={this.updateName.bind(this)} defaultValue={this.props.appointment.patientId} required>
                    <option key={'selectapatient'} disabled>Select a Patient</option>
                    {Object.values(this.props.doctor.patients).map((patient, i) => {
                      return <option key={i} value={patient._id}>{patient.lname + ', ' + patient.fname}</option>
                    })}
                  </select>
                </div>

                <div className='appointment-show-info'>  
                  <h3>Time: </h3>
                  <input type="time" id="time" defaultValue={moment(this.props.appointment.date).format("HH:mm")} onChange={this.updateTime.bind(this)}/>
                </div>
              </div>
            
              <div className='appointment-show-info'>
                <h3>For: </h3>
                <textarea id='purpose' value={this.state.purpose} onChange={this.updatePurpose.bind(this)}/>
              </div>
            </div>

            <div id='appointment-info-controls'>
              <button id='appointment-edit-button' onClick={this.handleSave}>Save</button>
              <button id='appointment-cancel-button' onClick={this.handleDelete}>Cancel Appointment</button>
              <button id='appointment-stop-edit' onClick={this.toggleEditing}>Back</button>
            </div>
          </div>
        </div>
      )
    }
    
  }
}

export default AppointmentShow