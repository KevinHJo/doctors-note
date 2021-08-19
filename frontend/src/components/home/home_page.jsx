import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../session/signup_form';
import NavBarContainer from '../navbar/top_nav_bar_container';

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <NavBarContainer login={this.props.login} logout={this.props.logout}/>
        <div id="spacer"></div>
        <div className="section-main">
          <div id="spacer"></div>
          <div className="info-upper-line"></div>
          <div className="section-info">
            <div className="container-info-left">
              <div className="section-doctor-picture">
                <img src='https://doctors-note-seeds.s3.us-west-1.amazonaws.com/form.png' 
                  alt="doctor"
                  className="doctor-image"
                />
              </div>
              <div className="section-desc">
                <p className="container-info-left-title">Your personalized Doctors Note.</p>
                <p className="container-info-left-desc">D.Note</p>
              </div>
            </div>
            <div id="horizontal-spacer"></div>
            <div className="container-info-right">
              <p className="title">New Registration</p>
              <SignupForm signup={this.props.signup}
                login={this.props.login}
                history={this.props.history}
              />
              <div className="bottom-links">
                <p className="product-key-info">Don't have a product key?
                  <a href="#" className="product-key-link">Click to purchase.</a>
                </p>
                <p className="product-key-info">Already have an account?
                  <a href="#" className="product-key-link">Click to login.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="info-lower-line"></div>
        </div>
        <div id="spacer"></div>
      </div>
    )
  }
}
