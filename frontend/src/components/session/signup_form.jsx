import React from 'react'

export default class SignupForm extends React.Component {
  render() {
    return (
      <form className="signup-form">
        <div className='section1'>
          <label className="signup-email-label">Email: 
            <input className="signup-email-input" type="text" placeholder="Enter Email Here."></input>
          </label>
          <label className="signup-business-label">DBA:
            <input className="signup-business-input" type="text" placeholder="Enter Business Name Here."></input>
          </label>
          <label className="signup-key-label">Product-Key:
            <input className="signup-key-input" type="text" placeholder="Enter 16-Digit Product Key."></input>
          </label>
        </div>
        <div className='section2'>
          <label className="signup-username-label">Username:
            <input type="text" placeholder="New Username Here."></input>
          </label>
          <label className="signup-password-label">Password:
            <input type="password" placeholder="New Password Here."></input>
          </label>
          <input id="signup-submit-button" type="submit"/>
        </div>
      </form>
    )
  }
}
