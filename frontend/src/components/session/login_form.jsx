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
    this.props.login(this.state);
    document.getElementById("login-form-section").classList.remove("show")
    this.setState({
      email: '',
      password: '',
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
              ></input>
            </label>
            <label className="login-password-label">Password:
              <input type="password"
                placeholder="Password"
                onChange={this.updateField("password")}
                defaultValue={this.state.password}
              ></input>
            </label>
            <input type="submit" value="Sign In" id="login-button"/>
          </div>
        </form>
      </div>
    )
  }
}
