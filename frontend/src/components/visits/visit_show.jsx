import React, { Component } from 'react'
import VisitForm from './visit_form'
import TopNavBarContainer from '../navbar/top_nav_bar_container'

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
          <div>
            <TopNavBarContainer />
            <div id='spacer'/>
            <VisitForm visit={visit} processForm={this.props.processForm} toggleEdit={this.toggleEdit}/>
          </div>
          
        )
      } else {
        return (
          <div>
            <TopNavBarContainer />
            <div id='spacer'/>
            <div className='visit-show'>
              <div className='soap-note'>
                <div className='soap-subjective'>
                  <h1>Subjective</h1>
                  <div className='soap-subjective-display' dangerouslySetInnerHTML={{ __html: visit.subjective }}/>
                </div>

                <div className='soap-objective'>
                  <h1>Objective</h1>
                    <div className='soap-objective-display' dangerouslySetInnerHTML={{ __html: visit.objective }}/>
                </div>

                <div className='soap-assessment'>
                  <h1>Assessment</h1>
                    <div className='soap-assessment-display' dangerouslySetInnerHTML={{ __html: visit.assessment }}/>
                </div>

                <div className='soap-plan'>
                  <h1>Plan</h1>
                    <div className='soap-plan-display' dangerouslySetInnerHTML={{ __html: visit.plan }}/>
                </div>
              </div>

              <button onClick={this.toggleEdit}>Edit</button>
            </div>
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
