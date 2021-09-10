import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Link } from 'react-router-dom';
import VisitFormNavBar from './visit_form_nav_bar';
import TopNavBarContainer from '../navbar/top_nav_bar_container';

class VisitForm extends Component {
  constructor(props) {
    super(props);
    const {visit} = this.props
    this.state = {
      _id: visit._id,
      subjective: visit.subjective,
      objective: visit.objective,
      assessment: visit.assessment,
      plan: visit.plan,
      patientId: visit.patientId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubjectiveChange = this.handleSubjectiveChange.bind(this);
    this.handleObjectiveChange = this.handleObjectiveChange.bind(this);
    this.handleAssessmentChange = this.handleAssessmentChange.bind(this);
    this.handlePlanChange = this.handlePlanChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => {
        this.props.toggleEdit();
        this.props.updateEditedVisit();
      })
  }

  handleSubjectiveChange(value, editor) {
    console.log(value);
    console.log(editor);
    this.setState({subjective: value})
  }

  handleObjectiveChange(value, editor) {
    this.setState({objective: value})
  }

  handleAssessmentChange(value, editor) {
    this.setState({assessment: value})
  }

  handlePlanChange(value, editor) {
    this.setState({plan: value})
  }

  cancelForm() {
    if (this.props.formSubmit === 'Save') {
      return <button onClick={() => window.location.reload()}>Cancel</button>
    } else {
      return <Link to={`/charts/${this.props.visit.patientId}`}>Cancel</Link>
    }
  }
  
  render() {
    let section;
    if (Object.values(this.props.modal)[0]) {
      switch (Object.keys(this.props.modal)[0]) {
        case '1':
          section = (
            <div className='soap-subjective'>
              <h1>Subjective</h1>
              <Editor
                apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                init={{
                  height: 700,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                }}
                value={this.state.subjective}
                onEditorChange={this.handleSubjectiveChange}
              />
            </div>
          )
          break;
        case '2':
          section = (
            <div className='soap-objective'>
              <h1>Objective</h1>
              <Editor
                apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                init={{
                  height: 700,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                }}
                onEditorChange={this.handleObjectiveChange}
                value={this.state.objective}
              />
            </div>
          )
          break;
        case '3':
          section = (
            <div className='soap-assessment'>
              <h1>Assessment</h1>
              <Editor
                apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                init={{
                  height: 700,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                }}
                onEditorChange={this.handleAssessmentChange}
                value={this.state.assessment}
              />
            </div>
          )
          break;
        case '4':
          section = (
            <div className='soap-plan'>
              <h1>Plan</h1>
              <Editor
                apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                init={{
                  height: 700,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                }}
                onEditorChange={this.handlePlanChange}
                value={this.state.plan}
              />
            </div>
          )
          break;
        default:
          break;
      }
    }

    return (
      <div id='visit-form-container'>
        <TopNavBarContainer />
        <div id='spacer'/>
        <div className='visit-form'>
          <VisitFormNavBar toggleModal={this.props.toggleModal} modal={this.props.modal}/>
          <form className='soap-note-form' onSubmit={this.handleSubmit}>
            {section}
            <div id='visit-form-controls'>
              <input type="submit" value={this.props.formSubmit}/>
              {this.cancelForm()}
            </div>
          </form>
        </div>
      </div>
      
    )
  }
}

export default VisitForm
