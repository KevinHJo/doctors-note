import React from 'react';
import { Link } from 'react-router-dom';
import SigninForm from '../session/login_form';

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLoginForm = this.toggleLoginForm.bind(this);
  }
  
  toggleLoginForm() {
    document.getElementById("login-form-section").classList.add("show")
  }
  
  render() {
    let buttons = [];
    if (this.props.loggedIn) {
      buttons.push(
        <Link onClick={this.props.logout} to="/" className="section-nav-logout-button section-buttons">
          <p className="nav-buttons">Logout</p>
        </Link>
      )
    } else {
      buttons.push(
        <div onClick={this.toggleLoginForm} className="section-nav-login-button section-buttons">
          <p className="nav-buttons">Sign in</p>
        </div>
      )
      buttons.push(
        <div className="section-nav-signup-button section-buttons">
          <Link to="/signup" className="nav-buttons">Signup</Link>
        </div>
      )
    }
    
    return (
      <div>
        <div id="top-nav-bar">
          <Link to="/" className="section-title">
            <p className="nav-title">D.Note</p>
          </Link>
          <div className="section-nav-buttons">
            {buttons}
          </div>
        </div>
        <SigninForm login={this.props.login} />
      </div>
    )
  }
}
