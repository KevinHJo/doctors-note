import React from 'react';
import SignupForm from '../session/signup_form';
import NavBarContainer from '../navbar/top_nav_bar_container';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prodKey: ''
    }

    this.generateProdKey = this.generateProdKey.bind(this);
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

  generateProdKey() {
    this.props.genProdKey(
      `${this.generatePassword()}-${this.generatePassword()}-${this.generatePassword()}-${this.generatePassword()}`
    );
  }
  
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
                <p className="product-key-info">Don't have a product key?
                  <a href="#" onClick={this.generateProdKey} className="product-key-link">Click to purchase.</a>
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
            <div>
              
            </div>
          </div>
        </section>
      </div>
    )
  }
}
