import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VisitForm from './visit_form'
import TopNavBarContainer from '../navbar/top_nav_bar_container'

class VisitShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      updated: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateEditedVisit = this.updateEditedVisit.bind(this);
  }

  componentDidMount() {
    if( window.localStorage ) {
      if(!localStorage.getItem('firstLoad'))
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }  
      else localStorage.removeItem('firstLoad');
    }

    this.props.fetchVisit(this.props.visitId);
  }

  updateEditedVisit() {
    this.props.fetchVisit(this.props.visitId);
    const updated = this.state.updated;
    this.setState({updated: !updated})
  }

  toggleEdit() {
    const editing = this.state.editing;
    this.setState({ editing: !editing })
  }

  handleDelete = e => {
    const patientId = this.props.visit.patientId
    const route = `/charts/${patientId}`
    this.props.deleteVisit(this.props.visitId)
      .then(() => {this.props.history.push(route);
      })
  }

  render() {
    if (this.props.visit) {
      const { visit } = this.props

      if (this.state.editing) {
        return (
          <div>
            <VisitForm visit={visit} processForm={this.props.processForm} toggleEdit={this.toggleEdit} updateEditedVisit={this.updateEditedVisit} formSubmit='Save' toggleModal={this.props.toggleModal} modal={this.props.modal}/>
          </div>
        )
      } else {
        return (
          <div id='visit-show-container'>
            <TopNavBarContainer />
            <div id='spacer'/>
            <div className='visit-show'>
              <div className='visit-info'>
                <p>{new Date(visit.createdAt).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</p>
              </div>
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
              <div className='soap-controls'>
                <button id='edit-visit-button' onClick={this.toggleEdit}>Edit</button>
                <button id='delete-visit-button' onClick={this.handleDelete}>Delete</button>
                <Link to={`/charts/${visit.patientId}`}>Back</Link>
              </div>
            </div>
          </div>
      )
      }
    } else {
      return (
        <div id='visit-show-container'>
          <TopNavBarContainer />
          <div id='spacer'/>
        </div>
      )
    }
  }
}

export default VisitShow
