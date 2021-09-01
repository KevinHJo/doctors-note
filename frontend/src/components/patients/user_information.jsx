import React from 'react'
import { formatPhone, getDigits, isDelete } from '../../util/chart_util'

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
    console.log(this.state)
    this.props.updatePatient(this.state)
      .then(() => this.props.receiveCurrentUser(this.state))
  }
  
  render() {
    if (!this.state.fname || !this.props.doctor) return null;
    return (
      <div id="patient-home-info-section">
        <p id="patient-home-info-title">User Information</p>
        <form id="patient-form">
          <div className="patient-form-section-left">
            <label>First Name:
              <input disabled className="nonedit-inputs" defaultValue={this.props.user.fname}/>
            </label>
            <label>Last Name:
              <input disabled className="nonedit-inputs" defaultValue={this.props.user.lname}/>
            </label>
            <label>Date of Birth:
              <input disabled className="nonedit-inputs" defaultValue={new Date(this.props.user.dateOfBirth.split("T")[0]).toLocaleDateString('en-US')}/>
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
