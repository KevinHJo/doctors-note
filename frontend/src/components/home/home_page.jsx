import React from 'react';
import SignupForm from '../session/signup_form';
import NavBarContainer from '../navbar/top_nav_bar_container';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prodKey: ''
    }

    // this.generateProdKey = this.generateProdKey.bind(this);
  }

  toggleLoginForm() {
    document.getElementById("login-form-section").classList.add("show")
    document.getElementById("login-email").focus();
  }

  generatePassword(length = 4) {
    return (
      Math.random().toString(20).substr(2, length)
    );
  }

  // generateProdKey() {
  //   this.props.genProdKey(
  //     `${this.generatePassword()}-${this.generatePassword()}-${this.generatePassword()}-${this.generatePassword()}`
  //   );
  // }
  
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
                <img src='https://doctors-note-seeds.s3.us-west-1.amazonaws.com/note.png' 
                  alt="doctor"
                  className="doctor-image"
                />
              </div>
              <div className="section-desc">
                <p className="container-info-left-title">Your personalized Doctor's Note</p>
                <p className="container-info-left-desc">D.Note</p>
              </div>
            </div>
            <div id="horizontal-spacer"></div>
            <div className="container-info-right">
              <p className="title">New Registration</p>
              <SignupForm signupErrors={this.props.signupErrors} signup={this.props.signup}
                login={this.props.login}
                history={this.props.history}
                prodKey={this.props.prodKey}
              />
              <div className="bottom-links">
                <p className="product-key-info">Are you an existing patient?
                  <Link to="/patients/login" className="product-key-link">Log in here.</Link>
                </p>
                <p className="product-key-info">Already have an account?
                  <a href="#" onClick={this.toggleLoginForm} className="product-key-link">Click to login.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="info-lower-line"></div>
        </div>

        <div id="spacer"></div>

        <section className='section-facts'>
          <h2>Electronic Health Records (EHR) Made for You</h2>
          <div className='facts-cont'>
            <div className='facts-made-by'>
              <img src='https://doctors-note-seeds.s3.us-west-1.amazonaws.com/stethoscope.png'
                alt='made-by'
                className="made-by-image"
              />
              <h2>Made by Professionals</h2>
              <p>D. Note was designed by healthcare professionals with healthcare professionals in mind. Our team strives to constantly improve the experience for all users.</p>
            </div>
            
            <div className='facts-easy-use'>
              <img src='https://doctors-note-seeds.s3.us-west-1.amazonaws.com/stopwatches.png'
                alt='easy-use'
                className="easy-use-image"
              />
              <h2>Up and Running in Minutes</h2>
              <p>D. Note is simple, intuitive, and easy to use. Just sign in, and start working! No downloads or installation necessary.</p>
            </div>
            
            <div className='facts-support'>
              <img src='https://doctors-note-seeds.s3.us-west-1.amazonaws.com/24-hours.png'
                alt='support'
                className="support-image"
              />
              <h2>24-Hour Support</h2>
              <p>Our team is committed to ensuring that your practice runs smoothly, no matter the hour. D. Note users enjoy award-winning customer service around the clock.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
