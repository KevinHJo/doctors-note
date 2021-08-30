import React from 'react';

class VisitFormNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.focusSection = this.focusSection.bind(this);
  }

  focusSection(num) {
    this.props.toggleModal(num);
  }

  render() {
    return (
      <div id='visit-form-nav'>
        <div id='nav-subjective' className={`visit-form-left-nav-sections ${(this.props.modal[1] ? 'focused' : '')}`} onClick={() => this.focusSection(1)}>
          <p>Subjective</p>
        </div>
        <div id='nav-objective' className={`visit-form-left-nav-sections ${(this.props.modal[2] ? 'focused' : '')}`} onClick={() => this.focusSection(2)}>
          <p>Objective</p>
        </div>
        <div id='nav-assessment' className={`visit-form-left-nav-sections ${(this.props.modal[3] ? 'focused' : '')}`} onClick={() => this.focusSection(3)}>
          <p>Assessment</p>
        </div>
        <div id='nav-plan' className={`visit-form-left-nav-sections ${(this.props.modal[4] ? 'focused' : '')}`} onClick={() => this.focusSection(4)}>
          <p>Plan</p>
        </div>
      </div>
    )
  }
}

export default VisitFormNavBar;