import React from 'react'

export default class UserInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: this.props.user.fname,
      lname: this.props.user.lname,
      username: this.props.user.username,
      dateOfBirth: this.props.user.dateOfBirth.split("T")[0],
      sex: this.props.user.sex,
      email: this.props.user.email,
      phone: this.props.user.phone,
      address: this.props.user.address,
      doctorId: this.props.user.doctorId,
      password: '',
    }
  }
  
  render() {
    return (
      <div id="patient-home-info-section">
        <p id="patient-home-info-title">User Information</p>
        <form id="patient-form">
          <div className="patient-form-section-left">
            <label>First Name:
              <input className="editable-inputs" defaultValue={this.state.fname}/>
            </label>
            <label>Last Name:
              <input className="editable-inputs" defaultValue={this.state.lname}/>
            </label>
            <label>Date of Birth:
              <input className="editable-inputs" defaultValue={this.state.dateOfBirth.split("T")[0]}/>
            </label>
            <label>Email:
              <input className="editable-inputs" defaultValue={this.state.email}/>
            </label>
            <label>Phone Number:
              <input className="editable-inputs" defaultValue={this.state.phone}/>
            </label>
            <label>Address:
              <input className="editable-inputs" defaultValue={this.state.address}/>
            </label>
          </div>
          <div className="patient-form-section-right">
            <label>Doctor's Id:
              <input disabled className="nonedit-inputs" defaultValue={this.state.doctorId}/>
            </label>
            <label>Personal Identifier Code:
              <input disabled className="nonedit-inputs patient-code" defaultValue={this.state.username.split("").slice(-4).join("")}/>
            </label>
            <input type='submit' value='Update' className="patient-home-form-button"/>
          </div>
        </form>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
        <div id='spacer'></div>
      </div>
    )
  }
}
