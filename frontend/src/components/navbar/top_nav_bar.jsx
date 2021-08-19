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
    document.getElementById("login-email").focus();
  }
  
  render() {
    let buttons = [];
    let title = !!this.props.pageDir ? this.props.pageDir : 'D.Note';
    let link = !!this.props.pageDir ? '/patients/login' : '/';
    let style = !!this.props.pageDir ? 'top-nav-bar-patient' : 'top-nav-bar';
    let color = !!this.props.pageDir ? 'section-title-patient' : 'section-title';
    let button = !!this.props.pageDir ? 'section-buttons-patient' : 'section-buttons';
    let name = '';
    if (this.props.currentUser && this.props.currentUser.username) {
      name = !!this.props.pageDir ? `${this.props.currentUser.fname} ${this.props.currentUser.lname} #${this.props.currentUser.username.split("").slice(-4).join("")}` : `Dr. ${this.props.currentUser.lname}`;
    }
    if (this.props.loggedIn) {
      buttons.push(
        <Link key='4' to='/patients/home' className={`${button}`}>
          <p className="nav-buttons">Welcome, {name}</p>
        </Link>
      )
      buttons.push(
        <Link key='0' onClick={this.props.logout} to="/" className={`${button}`}>
          <p className="nav-buttons">Logout</p>
        </Link>
      )
    } else {
      if (!!this.props.pageDir) {
        buttons.push(
          <Link key='3' to="/" className={`${button}`}>
            <p className="nav-buttons">Doctor Portal.</p>
          </Link>
        )
      } else {
        buttons.push(
          <p key='1' onClick={this.toggleLoginForm} className={`${button}`}>
            <a className="nav-buttons">Sign in</a>
          </p>
        )
        buttons.push(
          <Link key='2' to="/patients/login" className={`${button}`}>
            <p className="nav-buttons">Patient Portal.</p>
          </Link>
        )
      }
    }
    
    return (
      <div>
        <div id={style}>
          <Link to={link} className={color}>
            <img src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/white-icon.png"
              alt="chart"
              className="navbar-icon"
            ></img>
            <p className="nav-title">{title}</p>
          </Link>
          <div className="section-nav-buttons">
            {buttons.map(button => {
              return button;
            })}
          </div>
        </div>
        <SigninForm 
          login={this.props.login}
          signinErrors={this.props.signinErrors}
        />
      </div>
    )
  }
}
