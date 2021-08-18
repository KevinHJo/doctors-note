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

  render() {
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
                  placeholder="Enter Username Here." 
                  onChange={this.updateField('username')}
                  value={this.state.username}
                />
              </label>
              <label className="patient-login-labels patient-login-pw">Password:
                <input className="patient-login-inputs"
                  placeholder="Enter Password Here."
                  onChange={this.updateField('password')}
                  value={this.state.password}
                />
              </label>
              <input className="patient-login-button" type='submit' value="Submit" />
            </form>
          </div>
        </div>
        <div id="patient-section1-botline"></div>
      </div>
    )
  }
}
