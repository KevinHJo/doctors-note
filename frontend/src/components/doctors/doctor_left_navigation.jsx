import React from 'react'

export default class DoctorLeftNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 0,
    }

    this.focusSection = this.focusSection.bind(this);
  }

  focusSection(num) {
    this.props.toggleModal(num);
  }
  
  render() {
    return (
      <div id="doctor-left-nav">
        <div id="doctor-left-nav-section1" className={`doctor-left-nav-sections ${(this.props.modal[1] ? 'focused' : '')}`} onClick={() => this.focusSection(1)}>
          <p>doctor Overview</p>
        </div>
        <div id="doctor-left-nav-section2" className={`doctor-left-nav-sections ${(this.props.modal[2] ? 'focused' : '')}`} onClick={() => this.focusSection(2)}>
          <p>Appointments</p>
        </div>
        <div id="doctor-left-nav-section3" className={`doctor-left-nav-sections ${(this.props.modal[3] ? 'focused' : '')}`} onClick={() => this.focusSection(3)}>
          <p>Visits</p>
        </div>
        <div id="doctor-left-nav-section4" className={`doctor-left-nav-sections ${(this.props.modal[4] ? 'focused' : '')}`} onClick={() => this.focusSection(4)}>
          <p>Medical History</p>
        </div>
      </div>
    )
  }
}
