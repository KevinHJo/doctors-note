import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../session/signup_form';

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div className="section-header">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <div id="spacer"></div>
        <div className="section-main">
          <div id="spacer"></div>
          <div className="info-upper-line"></div>
          <div className="section-info">
            <div className="container-info-left">
              <div className="section-doctor-picture">
                <img src='https://doctors-note-seeds.s3.us-west-1.amazonaws.com/doctor.png' 
                  alt="doctor"
                  className="doctor-image"
                />
              </div>
              <div className="section-desc">
                <p className="container-info-left-title">Doctors Note</p>
                <p className="container-info-left-desc">Register your practice today.</p>
              </div>
            </div>
            <div id="horizontal-spacer"></div>
            <div className="container-info-right">
              <p className="title">New Registration</p>
              <SignupForm />
              <p className="product-key-info">Don't have a product key?
                <a href="#" className="product-key-link">Click to purchase.</a>
              </p>
            </div>
          </div>
          <div className="info-lower-line"></div>
        </div>
        <div id="spacer"></div>
      </div>
    )
  }
}
