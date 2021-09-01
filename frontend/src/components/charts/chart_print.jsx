import React from 'react'

export default class ChartPrint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'password',
      password: 'password',
      text: 'Click to reveal patient login credentials.'
    }
    
    this.togglePatientCredentials = this.togglePatientCredentials.bind(this);
    this.closeBanner = this.closeBanner.bind(this);
  }
  
  handlePrint = e => {
    window.print()
  }

  handleEmail = e => {
    const { state } = this.props.location
    window.open(`mailto:${state.email}?subject=${'Your patient username and password'}&body=${`Username: ${state.username}
    Password: ${state.pw}`}`)
  }

  togglePatientCredentials = (e) => {
    e.preventDefault();
    if (this.state.username === 'password') {
      this.setState({
        username: 'text',
        password: 'text',
        text: 'Click to hide patient login credentials.'
      })
    } else {
      this.setState({
        username: 'password',
        password: 'password',
        text: 'Click to reveal patient login credentials.'
      })
    }
  }

  closeBanner() {
    document.getElementById("print-banner").classList.add("hide")
  }

  render() {
    if (!this.props.state) return null
    console.log(this.props)
    const state = this.props.state; 
    return (
      <div id="print-banner">
        <div className="print-banner-section-1">
          <p className="pbs1-title">New patient created.</p>
        </div>
        <div className="print-banner-section-2">
          <div className="pbs2-credentials-section">
            <label className="credentials-username-label">Username: 
              <input className="credentials-username-input" type={this.state.username} disabled defaultValue={state.username}></input>
            </label>
            <label className="credentials-password-label">Password: 
              <input className="credentials-password-label" type={this.state.password} disabled defaultValue={state.pw}></input>
            </label>
          </div>
          <div className="pbs2-toggle-section">
            <p onClick={this.togglePatientCredentials}>{this.state.text}</p>
          </div>
        </div>
        <div className="print-banner-section-3">
          <button className="print-button" onClick={this.handlePrint}>Print</button>
          <button className="email-button" onClick={this.handleEmail}>Email</button>
          {/* <Link className="" to={`/charts/${state._id}`}>Chart</Link> */}
        </div>
        <div>
          <button className="close-button" onClick={this.closeBanner}>Close</button>
        </div>
      </div>
    )
  }
}
