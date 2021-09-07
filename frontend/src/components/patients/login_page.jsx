import React from 'react';
import TopNavBarContainer from '../navbar/top_nav_bar_container'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({ username: '', password: '' });
  }

  demoLogin(e) {
    e.preventDefault();
    const demoPatient = {
      username: 'MichaelMadsen2576',
      password: 'password'
    }

    this.props.login(demoPatient);
  }

  render() {
    let error1 = '';
    let error2 = '';
    let focused = {};
    
    const {username, email, password} = this.props.signinErrors;

    if (username) {
      error1 = (
        <input disabled className="error-field" defaultValue={`${username}`} />
      )
      focused['username'] = 'errored-field';
    }
    if (email) {
      error1 = (
        <input disabled className="error-field" defaultValue={`${email}`} />
      )
      focused['email'] = 'errored-field';
    }
    if (password) {
      error2 = (
        <input disabled className="error-field" defaultValue={`${password}`} />
      )
      focused['password'] = 'errored-field';
    }
    return (
      <div id="patient-login-page">
        <TopNavBarContainer pageDir='Patient Portal.' />
        <div id='spacer'></div>
        <div id="patient-section1-topline"></div>
        <div id='patient-login-section1'>
          <div id="patient-login-sub-section1">
            <p className="patient-login-title">Patient Login Portal</p>
            <form className="patient-login-form" onSubmit={this.handleSubmit}>
              <label className="patient-login-labels">Username:
                <input className="patient-login-inputs"
                  type="text"
                  placeholder="Enter Username Here." 
                  onChange={this.updateField('username')}
                  value={this.state.username}
                  id={focused['username']}
                />
                {error1}
              </label>
              <label className="patient-login-labels patient-login-pw">Password:
                <input className="patient-login-inputs"
                  type="password"
                  placeholder="Enter Password Here."
                  onChange={this.updateField('password')}
                  value={this.state.password}
                  id={focused['password']}
                />
                {error2}
              </label>
              <div className='patient-login-buttons'>
                <input className="patient-login-button" type='submit' value="Submit" />
                <button id='patient-login-demo' onClick={this.demoLogin}>Demo</button>
              </div>
            </form>
          </div>
          <div id="patient-login-sub-section2">
            <div className="patient-login-desc">
              <p className='desc'>Access your medical records, all in one place.</p>
            </div>
            <div className="patient-login-img">
              <img id="group-icon" src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/group-users.png" alt="records"></img>
            </div>
          </div>
        </div>
        <div id="patient-section1-botline"></div>
      </div>
    )
  }
}
