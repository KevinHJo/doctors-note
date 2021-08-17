import React from 'react';
import { Link } from 'react-router-dom';

export default class TopNavBar extends React.Component {
  render() {
    let buttons = [];
    if (this.props.loggedIn) {
      buttons.push(
        <div className="section-nav-logout-button section-buttons">
          <Link to="/logout" className="nav-buttons">Logout</Link>
        </div>
      )
    } else {
      buttons.push(
        <div className="section-nav-login-button section-buttons">
          <Link to="/login" className="nav-buttons">Sign in</Link>
        </div>
      )
      buttons.push(
        <div className="section-nav-signup-button section-buttons">
          <Link to="/signup" className="nav-buttons">Signup</Link>
        </div>
      )
    }
    
    return (
      <div id="top-nav-bar">
        <div className="section-title">
          <Link to="/" className="nav-title">D.Note</Link>
        </div>
        <div className="section-nav-buttons">
          {buttons}
        </div>
      </div>
    )
  }
}
