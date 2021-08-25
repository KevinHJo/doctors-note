import React from 'react'
import { formatPhone, getDigits, isDelete } from '../../util/chart_util'
import TopNavBarContainer from '../navbar/top_nav_bar_container'
import * as ECT from '@whoicd/icd11ect';
import '@whoicd/icd11ect/style.css';

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
    
    if( window.localStorage ) {
      if(!localStorage.getItem('firstLoad'))
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }  
      else localStorage.removeItem('firstLoad');
    }
    
    const mySettings = {apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net"};
    const myCallbacks = {
      selectedEntityFunction: selectedEntity => {
        const selections = this.state.diagnoses.concat(selectedEntity.code + " - " + selectedEntity.bestMatchText)
        this.setState({diagnoses: selections})
      }
    };
    
    ECT.Handler.configure(mySettings, myCallbacks);
    if (this.props.formSubmit === 'Save') this.props.fetchPatient(this.props.patientId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.patient !== prevProps.patient) {
      this.setState(this.props.patient)
    }
  }

  handleStringChange = field => e => {
    if (field === 'search' && e.currentTarget.value.split("").length === 1) {
      this.addVisible();
    }
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
    this.props.processForm(this.state)
      .then(res => {
        if (this.props.formSubmit === 'Create New Patient') {
          this.props.history.push({pathname: '/print', state: { username: res.patient.username, pw: res.patient.pw, _id: res.patient._id, email: res.patient.email}})
        } else {
          this.props.history.push({pathname:  `/charts/${this.props.patientId}`})
        }
      })
  }

  renderSelections() {
    if (this.state.diagnoses[0]) {
      return (
        <div>
          {this.state.diagnoses.map(selection => {
            return <li key={this.state.diagnoses.indexOf(selection)}>{selection}</li>
          })}
        </div>
      )
    }
  }

  removeVisible() {
    console.log('remove');
    document.getElementById('ctw-window').classList.remove('visible')
    document.getElementById('close-modal').classList.remove('visible')
  }

  addVisible() {
    console.log('add')
    document.getElementById('ctw-window').classList.add('visible')
    document.getElementById('close-modal').classList.add('visible')
  }

  render() {
    if (!this.props.patient) return null

    return (
      <div id='new-chart-page' className="visible">
        <TopNavBarContainer />
        <div id='spacer'></div>
        <div id='close-modal' onClick={this.removeVisible}></div>
        <div id="fuzzy"></div>
        <div id="new-patient-chart-form">
          {this.props.formHeader}
          <form onSubmit={this.handleSubmit} className='new-chart-form'>
            <div className='new-chart-top'>
              <div className='new-chart-section1'>
                <label className='new-chart-form-label'>First name: 
                  <input type="text" required onChange={this.handleStringChange('fname')} value={this.state.fname}/>
                </label>

                <label className='new-chart-form-label'>Last name: 
                  <input type="text" required onChange={this.handleStringChange('lname')} value={this.state.lname}/>
                </label>
                
                <label className='new-chart-form-label'>Email: 
                  <input type="email" required onChange={this.handleStringChange('email')} value={this.state.email}/>
                </label>
              </div>

              <div className='new-chart-section2'>
                <label className='new-chart-form-label'>Date of Birth: 
                  <input type="date" required onChange={this.handleStringChange('dateOfBirth')} value={this.state.dateOfBirth.slice(0,10)}/>
                </label>

                <label className='new-chart-form-label'>Phone number: 
                  <input type="tel" required pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={this.handlePhoneChange} value={this.state.phone} />
                  {/* <input type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={this.handleStringChange('phone')} value={this.state.phone} /> */}
                </label>

                <label className='new-chart-form-label'>Sex: 
                  <select className='new-chart-sex-input' value={this.state.sex} required onChange={this.handleStringChange('sex')}>
                    <option value="" disabled hidden> </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>

              </div>
            </div>

            <label className='new-chart-form-label new-chart-form-address'>Address: 
              <input type="text" required onChange={this.handleStringChange('address')} value={this.state.address}/>
            </label>

            <label className='new-chart-form-label'>Diagnoses: 
              <div className='new-chart-diagnoses'>
                <div className='new-chart-diaglist'>{this.renderSelections()}</div>
                Type to search: <input type="text" className="ctw-input" autoComplete="off" data-ctw-ino="1" onClick={this.addVisible} onChange={this.handleStringChange('search')}/>

                <div className="ctw-window" data-ctw-ino="1" id='ctw-window'></div>
              </div>
            </label>
            <label className='new-chart-form-label'>Medications: 
              <textarea onChange={this.handleArrayChange('medications')}></textarea>
            </label>
            <label className='new-chart-form-label'>Allergies: 
              <textarea onChange={this.handleArrayChange('allergies')}></textarea>
            </label>
            <div id="section-buttons">
              <input type="submit" value="Update Patient" className='new-chart-buttons' id='create-button'/>
              <p onClick={() => window.location.reload()} className='new-chart-buttons' id='cancel-button'>Cancel</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}