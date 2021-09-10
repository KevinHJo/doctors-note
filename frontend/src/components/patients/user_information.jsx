import React from 'react'
import { formatPhone, getDigits, isDelete } from '../../util/chart_util'
import { changePassword } from '../../util/patient_api_util';

export default class UserInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // _id: this.props.user.id,
      // username: this.props.user.username,
      // password: this.props.user.password,
      // allergies: this.props.user.allergies,
      // medications: this.props.user.medications,
      // diagnoses: this.props.user.diagnoses,
      // fname: this.props.user.fname,
      // lname: this.props.user.lname,
      // dateOfBirth: this.props.user.dateOfBirth,
      // sex: this.props.user.sex,
      // doctorId: this.props.user.doctorId,
      // role: this.props.user.role,
      // visits: this.props.user.visits,
      // email: this.props.user.email,
      // phone: this.props.user.phone,
      // address: this.props.user.address,
    }
  }

  componentDidMount() {
    if (!!this.props.user) this.setState(this.props.user)
  }

  handlePhoneChange = e => {
    let prevDigits = getDigits(this.state.phone)
    let nextDigits = getDigits(e.target.value)
    if (prevDigits.length === 10 && !isDelete(e.nativeEvent.inputType)) return
    if (isDelete(e.nativeEvent.inputType) && nextDigits.length === prevDigits.length) return
    if (!/^\d+$/.test(e.nativeEvent.data) && !isDelete(e.nativeEvent.inputType)) return
    this.setState({phone: formatPhone(nextDigits)})
  }

  handleStringChange = field => e => {
    this.setState({[field]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.updatePatient(this.state)
      .then(() => window.location.reload())
  }

  handleChangePassword = e => {
    e.preventDefault()
    let passwordField = document.getElementById('newPassword')
    let passwordMessage = document.getElementById('passwordMessage')
    let newPassword = passwordField.value
    if (newPassword.length < 6 || newPassword.length > 30) {
      passwordMessage.innerHTML = 'Password must be between 6 and 30 characters';
      passwordMessage.className = '';
      passwordMessage.classList.add('password-change-fail')
    } else {
      changePassword({_id: this.state._id, password: newPassword})
      passwordMessage.innerHTML = 'Password changed successfully';
      passwordMessage.className = '';
      passwordMessage.classList.add('password-change-success');
    }
    passwordField.value = ''
  }
  
  render() {
    if (!this.state.fname || !this.props.doctor) return null;
    return (
      <div id="patient-home-info-section">
        <p id="patient-home-info-title">User Information</p>
        <form id="patient-form">
          <div className="patient-form-section-left">
            <label>First Name:
              <input disabled className="nonedit-inputs" defaultValue={this.state.fname}/>
            </label>
            <label>Last Name:
              <input disabled className="nonedit-inputs" defaultValue={this.state.lname}/>
            </label>
            <label>Date of Birth:
              <input disabled className="nonedit-inputs" defaultValue={new Date(this.state.dateOfBirth.split("T")[0]).toLocaleDateString('en-US')}/>
            </label>
            <label>Email:
              <input className="editable-inputs" type='email' value={this.state.email} onChange={this.handleStringChange('email')} />
            </label>
            <label>Phone Number:
              <input type="tel" className="editable-inputs" required pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={this.handlePhoneChange} value={this.state.phone} />
              {/* <input className="editable-inputs" defaultValue={this.state.phone}/> */}
            </label>
            <label>Address:
              <input className="editable-inputs" value={this.state.address} onChange={this.handleStringChange('address')} />
            </label>
          </div>
          <div className="patient-form-section-right">
            <label>Your doctor is:
              <input disabled className="nonedit-inputs" defaultValue={`Dr. ${this.props.doctor.lname}`}/>
            </label>
            <label>Personal Identifier Code P.I.C:
              <input disabled className="nonedit-inputs patient-code" defaultValue={this.state.username.split("").slice(-4).join("")}/>
            </label>
            <input type='submit' value='Update' className="patient-home-form-button" onClick={this.handleSubmit} />
          </div>
        </form>
        <div id='spacer'></div>
        <label className='patient-password-change'>Change password:
          <div id='patient-password-container'>
            <input type="password" id="newPassword" />
            <button id='patient-password-button' onClick={this.handleChangePassword}>Edit</button>
          </div> 
          <p id="passwordMessage"></p>
        </label>
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
