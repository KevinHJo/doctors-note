import React from 'react'

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      role: '',
      dba: '',
      fname: '',
      lname: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let packages = Object.assign({}, this.state, {role: "admin", password2: this.state.password});
    // console.log(packages)
    this.props.signup(packages, this.props.history)
      .then((user) => this.props.login(packages))
    this.setState = {
      username: '',
      email: '',
      password: '',
      role: '',
      dba: '',
      fname: '',
      lname: ''
    }
    this.props.history.push('/charts')
  }

  updateField(field) {
    let that = this;
    return (e) => {
      that.setState({
        [field]: e.currentTarget.value
      })
    }
  }
  
  render() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div className='section1'>
          <label className="signup-business-label">First Name:
            <input className="signup-business-input"
              type="text"
              placeholder="Enter First Name Here."
              onChange={this.updateField("fname")}
              defaultValue={this.state.fname}
            ></input>
          </label>
          <label className="signup-business-label">Last Name:
            <input className="signup-business-input"
              type="text"
              placeholder="Enter Last Name Here."
              onChange={this.updateField("lname")}
              defaultValue={this.state.lname}
              ></input>
          </label>
          <label className="signup-business-label">DBA:
            <input className="signup-business-input"
              type="text"
              placeholder="Enter Business Name Here."
              onChange={this.updateField("dba")}
              defaultValue={this.state.dba}
              ></input>
          </label>
          <label className="signup-key-label">Product-Key:
            <input className="signup-key-input" type="text" placeholder="Enter 16-Digit Product Key."></input>
          </label>
        </div>
        <div className='section2'>
          <label className="signup-email-label">Email: 
            <input className="signup-email-input" 
              type="text" 
              placeholder="Enter Email Here."
              onChange={this.updateField('email')}
              defaultValue={this.state.email}
            ></input>
          </label>
          <label className="signup-username-label">Username:
            <input type="text" 
              placeholder="New Username Here."
              onChange={this.updateField("username")}
              defaultValue={this.state.username}
              ></input>
          </label>
          <label className="signup-password-label">Password:
            <input type="password" 
              placeholder="New Password Here."
              onChange={this.updateField("password")}
              defaultValue={this.state.password}
            ></input>
          </label>
          <input id="signup-submit-button" type="submit"/>
        </div>
      </form>
    )
  }
}
