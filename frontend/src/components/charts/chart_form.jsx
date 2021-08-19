import React from 'react'

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
      diagnoses: [],
      medications: [],
      allergies: []
    }
  }


  render() {
    return (
      <div>
        <div id='spacer'></div>
        <h1>New Patient Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First name: 
            <input type="text" onChange={() => this.handleChange('fname')} />
          </label>
          <label>Last name: 
            <input type="text" onChange={() => this.handleChange('lname')} />
          </label>
          <label>Date of Birth: 
            <input type="text" onChange={() => this.handleChange('dateOfBirth')} />
          </label>
          <label>Sex: 
            <input type="text" onChange={() => this.handleChange('sex')} />
          </label>
          <label>Email: 
            <input type="text" onChange={() => this.handleChange('email')} />
          </label>
          <label>Phone number: 
            <input type="text" onChange={() => this.handleChange('phone')} />
          </label>
          <label>Address: 
            <input type="text" onChange={() => this.handleChange('address')} />
          </label>
          <label>Diagnoses: 
            <input type="text" onChange={() => this.handleChange('diagnoses')} />
          </label>
          <label>Medications: 
            <input type="text" onChange={() => this.handleChange('medications')} />
          </label>
          <label>Allergies: 
            <input type="text" onChange={() => this.handleChange('allergies')} />
          </label>
        </form>
      </div>
    )
  }
}
