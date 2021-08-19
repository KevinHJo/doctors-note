import React, { Component } from 'react'
import VisitForm from './visit_form'

class VisitShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchVisit(this.props.visitId);
  }

  toggleEdit() {
    const editing = this.state.editing;
    this.setState({ editing: !editing })
  }

  render() {
    if (this.props.visit) {
      const {visit} = this.props
      if (this.state.editing) {
        return (
          <VisitForm visit={visit} processForm={this.props.processForm}/>
        )
      } else {
        return (
        <div className='visit-show'>
          <div className='soap-note'>
            <div className='soap-subjective'>
              <h1>Subjective</h1>
              <div className='soap-subjective-display'>{visit.subjective}</div>
            </div>

            <div className='soap-objective'>
              <h1>Objective</h1>
                <div className='soap-objective-display'>{visit.objective}</div>
            </div>

            <div className='soap-assessment'>
              <h1>Assessment</h1>
                <div className='soap-assessment-display'>{visit.assessment}</div>
            </div>

            <div className='soap-plan'>
              <h1>Plan</h1>
                <div className='soap-plan-display'>{visit.plan}</div>
            </div>
          </div>

          <button onClick={this.toggleEdit}>Edit</button>
        </div>
      )
      }
    } else {
      return (
        <p key={this.props.visit}>Loading Visit</p>
      )
    }
  }
}

export default VisitShow
