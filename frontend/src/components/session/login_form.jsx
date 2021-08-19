import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.hideLoginForm = this.hideLoginForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  hideLoginForm() {
    document.getElementById("login-form-section").classList.remove("show")
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(res => {
        if (!this.props.signinErrors) {
          document.getElementById("login-form-section").classList.remove("show")
          this.setState({
            email: '',
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
                onChange={this.updateField('email')}
                defaultValue={this.state.email}
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
            <input type="submit" value="Sign In" id="login-button"/>
          </div>
        </form>
      </div>
    )
  }
}
