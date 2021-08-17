import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div id="empty-space"></div>
        <form id="login-form" onSubmit={this.props.handleSubmit}>
          <p className='title'>Sign In</p>
          <div className="section-login-fields">
            <label className="login-username-email-label">Username or Email:
              <input type="text" placeholder="Username or email"></input>
            </label>
            <label className="login-password-label">Password:
              <input type="password" placeholder="Password"></input>
            </label>
            <input type="submit" value="Sign In" id="login-button"/>
          </div>
        </form>
      </div>
    )
  }
}
