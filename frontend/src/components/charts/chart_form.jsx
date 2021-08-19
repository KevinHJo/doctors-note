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
    this.props.createPatient(this.state)
  }

  render() {
    return (
      <div>
        <TopNavBarContainer />
        <div id='spacer'></div>
        <h1>New Patient Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First name: 
            <input type="text" onChange={() => this.handleStringChange('fname')} />
          </label>
          <label>Last name: 
            <input type="text" onChange={() => this.handleStringChange('lname')} />
          </label>
          <label>Date of Birth: 
            <input type="date" onChange={() => this.handleStringChange('dateOfBirth')} />
          </label>
          <label>Sex: 
            <select defaultValue='' required onChange={() => this.handleStringChange('sex')} >
              <option value="" disabled hidden> </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label>Email: 
            <input type="email" onChange={() => this.handleStringChange('email')} />
          </label>
          <label>Phone number: 
            <input type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={() => this.handleStringChange('phone')} />
          </label>
          <label>Address: 
            <input type="text" onChange={() => this.handleStringChange('address')} />
          </label>
          <label>Diagnoses: 
            <input type="text" onChange={() => this.handleArrayChange('diagnoses')} />
          </label>
          <label>Medications: 
            <input type="text" onChange={() => this.handleArrayChange('medications')} />
          </label>
          <label>Allergies: 
            <input type="text" onChange={() => this.handleArrayChange('allergies')} />
          </label>
          <input type="submit" value="Create Patient" />
        </form>
      </div>
    )
  }
}
