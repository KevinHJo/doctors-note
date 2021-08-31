import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginId: '',
      password: ''
    }

    this.hideLoginForm = this.hideLoginForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  hideLoginForm(e) {
    e.preventDefault();
    document.getElementById("login-form-section").classList.remove("show");
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(res => {
        if (!this.props.signinErrors) {
          document.getElementById("login-form-section").classList.remove("show")
          this.setState({
            loginId: '',
            password: '',
          })
        }
      })
  }

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {
      loginId: 'demo@demo.com',
      password: 'password'
    }
  
    this.props.login(demoUser);
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
      <div id="login-form-section">
        <div id="empty-space" onClick={this.hideLoginForm}></div>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <p className='title'>Sign In</p>
          <div className="section-login-fields">
            <label className="login-username-email-label">Username or Email:
              <input type="text"
                placeholder="Username or email"
                onChange={this.updateField('loginId')}
                defaultValue={this.state.loginId}
                id="login-email"
                className={`${focused['email']} user-login-email`}
              ></input>
              {error1}
            </label>
            <label className="login-password-label">Password:
              <input type="password"
                placeholder="Password"
                onChange={this.updateField("password")}
                defaultValue={this.state.password}
                className={`${focused['password']} user-login-password`}
              ></input>
              {error2}
            </label>
            <div className='login-buttons'>
              <input type="submit" value="Sign In" id="login-button"/>
              <button id='demo-button' onClick={this.demoLogin}>Demo</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
