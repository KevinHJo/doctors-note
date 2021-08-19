import React from 'react'

export default class LeftNavigation extends React.Component {
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
      <div id="patient-left-nav">
        <div id="patient-left-nav-section1" className={`patient-left-nav-sections ${(this.props.modal[1] ? 'focused' : '')}`} onClick={() => this.focusSection(1)}>
          <p>Patient Overview</p>
        </div>
        <div id="patient-left-nav-section2" className={`patient-left-nav-sections ${(this.props.modal[2] ? 'focused' : '')}`} onClick={() => this.focusSection(2)}>
          <p>Appointments</p>
        </div>
        <div id="patient-left-nav-section3" className={`patient-left-nav-sections ${(this.props.modal[3] ? 'focused' : '')}`} onClick={() => this.focusSection(3)}>
          <p>Visits</p>
        </div>
        <div id="patient-left-nav-section4" className={`patient-left-nav-sections ${(this.props.modal[4] ? 'focused' : '')}`} onClick={() => this.focusSection(4)}>
          <p>Medical History</p>
        </div>
      </div>
    )
  }
}
