import React from 'react'

export default class ChartPrint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'password',
      password: 'password',
      text: 'Reveal credentials'
    }
    
    this.togglePatientCredentials = this.togglePatientCredentials.bind(this);
    this.closeBanner = this.closeBanner.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  
  handlePrint = e => {
    window.print()
  }

  handleEmail = e => {
    e.preventDefault();
    const state = this.props.state
    let email = state.email
    window.open(`mailto:${email}?subject=${'Your patient username and password'}&body=${`Username: ${state.username}
    Password: ${state.pw}`}`)
  }

  togglePatientCredentials = (e) => {
    e.preventDefault();
    if (this.state.username === 'password') {
      this.setState({
        username: 'text',
        password: 'text',
        text: 'Hide credentials'
      })
    } else {
      this.setState({
        username: 'password',
        password: 'password',
        text: 'Reveal credentials'
      })
    }
  }

  closeBanner() {
    document.getElementById("new-patient-info-banner").classList.add("hide")
  }

  render() {
    if (!this.props.state) return null
    const state = this.props.state; 
    return (
      <div id="print-banner">
        <div className="print-banner-section-1 pb-sections">
          <p className="pbs1-title">New patient created.</p>
          <p className="pbs1-title">This information will no longer be available after you navigate away.</p>
        </div>
        <div className="print-banner-section-2 pb-sections">
          <div className="pbs2-credentials-section">
            <label className="credentials-username-label labels">Username: 
              <input className="credentials-username-input inputs" type={this.state.username} disabled defaultValue={state.username}></input>
            </label>
            <label className="credentials-password-label labels">Password: 
              <input className="credentials-password-input inputs" type={this.state.password} disabled defaultValue={state.pw}></input>
            </label>
          </div>
          <div className="pbs2-toggle-section" onClick={this.togglePatientCredentials}>
            <p className="">{this.state.text}</p>
          </div>
        </div>
        <div className="print-banner-section-3 pb-sections">
          <div className="pb3-sections email-section" onClick={this.handleEmail}>
            <p className="email-button">Email</p>
            <img
              src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/mail.png"
              alt="email icon"
              className="send-email-icon send-icons"
            ></img>
          </div>
          <div className="pb3-sections print-section" onClick={this.handlePrint}>
            <p className="print-button">Print</p>
            <img
              src="https://doctors-note-seeds.s3.us-west-1.amazonaws.com/printer.png" 
              alt="print icon"
              className="send-print-icon send-icons"
            ></img>
          </div>
          {/* <Link className="" to={`/charts/${state._id}`}>Chart</Link> */}
        </div>
        <div className="print-banner-section-4 pb-sections">
          {/* <button className="close-button" onClick={this.closeBanner}>Close</button> */}
          <div className="pb4-sections close-section" onClick={this.closeBanner}>
            <img
              src="https://fazebook-seeds.s3.us-west-1.amazonaws.com/close.png" 
              alt="close icon"
              className="send-close-icon send-icons"
            ></img>
          </div>
        </div>
      </div>
    )
  }
}
