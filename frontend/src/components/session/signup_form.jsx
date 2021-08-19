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
      .catch((err) => this.setState = this.state)
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
    let error1 = '';
    let error2 = '';
    let error3 = '';
    let error4 = '';
    let error5 = '';
    let error6 = '';
    let error7 = '';
    let focused = {};

    if (this.props.signupErrors) {
      const {fname, lname, dba, prodKey, email, username, password} = this.props.signupErrors;

      if (fname) {
        error1 = (
          <input disabled className="error-field" defaultValue={`${fname}`}/>
        )
        focused['fname'] = 'errored-field';
      }
      if (lname) {
        error2 = (
          <input disabled className="error-field" defaultValue={`${lname}`}/>
        )
        focused['lname'] = 'errored-field';
      }
      if (dba) {
        error3 = (
          <input disabled className="error-field dba-error-field" defaultValue={`${dba}`}/>
        )
        focused['dba'] = 'errored-field';
      }
      if (prodKey) {
        error4 = (
          <input disabled className="error-field" defaultValue={`${prodKey}`}/>
        )
        focused['prodKey'] = 'errored-field';
      }
      if (email) {
        error5 = (
          <input disabled className="error-field" id="error-field-email" defaultValue={`${email}`}/>
        )
        focused['email'] = 'errored-field';
      }
      if (username) {
        error6 = (
          <textarea disabled className="error-field" id="error-field-username" defaultValue={`${username}`}/>
        )
        focused['username'] = 'errored-field';
      }
      if (password) {
        error7 = (
          <textarea disabled className="error-field" id="error-field-pw" defaultValue={`${password}`}/>
        )
        focused['password'] = 'errored-field';
      }
    }

    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div className='section1'>
          <label className="signup-business-label">First Name:
            <input className="signup-business-input"
              type="text"
              id={focused['fname']}
              placeholder="Enter First Name Here."
              onChange={this.updateField("fname")}
              defaultValue={this.state.fname}
            ></input>
            {error1}
          </label>
          <label className="signup-business-label">Last Name:
            <input className="signup-business-input"
              type="text"
              id={focused['lname']}
              placeholder="Enter Last Name Here."
              onChange={this.updateField("lname")}
              defaultValue={this.state.lname}
              ></input>
            {error2}
          </label>
          <label className="signup-business-label">DBA:
            <input className="signup-business-input"
              type="text"
              id={focused['dba']}
              placeholder="Enter Business Name Here."
              onChange={this.updateField("dba")}
              defaultValue={this.state.dba}
              ></input>
            {error3}
          </label>
          <label className="signup-key-label">Product-Key:
            <input className="signup-key-input" 
              type="text"
              id={focused['prodKey']}
              placeholder="Enter 16-Digit Product Key."
            ></input>
            {error4}
          </label>
        </div>
        <div className='section2'>
          <label className="signup-email-label">Email: 
            <input className="signup-email-input" 
              type="text"
              id={focused['email']}
              placeholder="Enter Email Here."
              onChange={this.updateField('email')}
              defaultValue={this.state.email}
            ></input>
            {error5}
          </label>
          <label className="signup-username-label">Username:
            <input type="text"
              id={focused['username']}
              placeholder="New Username Here."
              onChange={this.updateField("username")}
              defaultValue={this.state.username}
            ></input>
            {error6}
          </label>
          <label className="signup-password-label">Password:
            <input type="password"
              id={focused['password']}
              placeholder="New Password Here."
              onChange={this.updateField("password")}
              defaultValue={this.state.password}
            ></input>
            {error7}
          </label>
          <input id="signup-submit-button" type="submit"/>
        </div>
      </form>
    )
  }
}
