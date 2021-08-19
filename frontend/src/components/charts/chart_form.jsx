import React from 'react'
import TopNavBarContainer from '../navbar/top_nav_bar_container'

export default class ChartForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      dateOfBirth: '',
      sex: '',
      email: '',
      phone: '',
      address: '',
      doctorId: this.props.doctorId,
      diagnoses: [],
      medications: [],
      allergies: []
    }
  }

  handleStringChange = field => e => {
    this.setState({[field]: e.target.value})
  }

  handleArrayChange = field => e => {
    this.setState({[field]: e.target.value.split(',')})
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.createPatient(this.state)
      .then(res => this.props.history.push({pathname: '/print', state: { username: res.patient.username, pw: res.patient.pw, _id: res.patient._id, email: res.patient.email }}))
  }

  render() {
    return (
      <div>
        <TopNavBarContainer />
        <div id='spacer'></div>
        <h1>New Patient Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First name: 
            <input type="text" required onChange={this.handleStringChange('fname')} />
          </label>
          <label>Last name: 
            <input type="text" required onChange={this.handleStringChange('lname')} />
          </label>
          <label>Date of Birth: 
            <input type="date" required onChange={this.handleStringChange('dateOfBirth')} />
          </label>
          <label>Sex: 
            <select defaultValue='' required onChange={this.handleStringChange('sex')} >
              <option value="" disabled hidden> </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label>Email: 
            <input type="email" required onChange={this.handleStringChange('email')} />
          </label>
          <label>Phone number: 
            <input type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={this.handleStringChange('phone')} />
          </label>
          <label>Address: 
            <input type="text" required onChange={this.handleStringChange('address')} />
          </label>
          <label>Diagnoses: 
            <textarea onChange={this.handleArrayChange('diagnoses')}></textarea>
          </label>
          <label>Medications: 
            <textarea onChange={this.handleArrayChange('medications')}></textarea>
          </label>
          <label>Allergies: 
            <textarea onChange={this.handleArrayChange('allergies')}></textarea>
          </label>
          <input type="submit" value="Create Patient" />
        </form>
      </div>
    )
  }
}
