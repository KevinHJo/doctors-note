import React from 'react'
import { formatPhone, getDigits, isDelete } from '../../util/chart_util'
import TopNavBarContainer from '../navbar/top_nav_bar_container'
import * as ECT from '@whoicd/icd11ect';

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

    this.renderSelections = this.renderSelections.bind(this);
  }

  componentDidMount() {
    const mySettings = {apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net"};
    const myCallbacks = {
      selectedEntityFunction: selectedEntity => {
        const selections = this.state.diagnoses.concat(selectedEntity.code + " - " + selectedEntity.bestMatchText)
        this.setState({diagnoses: selections})
      }
    };

    ECT.Handler.configure(mySettings, myCallbacks);
  }

  handleStringChange = field => e => {
    this.setState({[field]: e.target.value})
  }

  handleArrayChange = field => e => {
    console.log(e)
    this.setState({[field]: e.target.value.split(',')})
  }

  handlePhoneChange = e => {
    // console.log(e)
    let prevDigits = getDigits(this.state.phone)
    let nextDigits = getDigits(e.target.value)
    // console.log(prevDigits)
    // console.log(nextDigits)
    if (prevDigits.length === 10 && !isDelete(e.nativeEvent.inputType)) return
    if (isDelete(e.nativeEvent.inputType) && nextDigits.length === prevDigits.length) return
    if (!/^\d+$/.test(e.nativeEvent.data) && !isDelete(e.nativeEvent.inputType)) return
    this.setState({phone: formatPhone(nextDigits)})
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.createPatient(this.state)
      .then(res => this.props.history.push({pathname: '/print', state: { username: res.patient.username, pw: res.patient.pw, _id: res.patient._id, email: res.patient.email }}))
  }

  renderSelections() {
    if (this.state.diagnoses[0]) {
      return (
        <div>
          {this.state.diagnoses.map(selection => {
            return <li>{selection}</li>
          })}
        </div>
      )
    }
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
            <input type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(123) 456-7890" onChange={this.handlePhoneChange} value={this.state.phone} />
            {/* <input type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={this.handleStringChange('phone')} value={this.state.phone} /> */}
          </label>
          <label>Address: 
            <input type="text" required onChange={this.handleStringChange('address')} />
          </label>
          <label>Diagnoses: 
            <div>
              {this.renderSelections()}
              Type for starting search: <input type="text" class="ctw-input" autocomplete="off" data-ctw-ino="1" />
              {/* <button class="search-clear" onClick={ECT.Handler.clear('1')} title="Clear search and results">❌</button> */}
              <div class="ctw-window" data-ctw-ino="1"></div>
            </div>
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
