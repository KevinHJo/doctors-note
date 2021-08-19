import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'

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
    this.props.processForm(this.state);
    this.props.toggleEdit();
    this.props.updateEditedVisit();
  }

  handleSubjectiveChange(value, editor) {
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
  
  render() {
    return (
      <div className='visit-form'>
        <form className='soap-note' onSubmit={this.handleSubmit}>
          <div className='soap-subjective'>
            <h1>Subjective</h1>
            <Editor
              apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
              init={{
                height: 500,
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

          <div className='soap-objective'>
            <h1>Objective</h1>
              <Editor
                apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                init={{
                  height: 500,
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

          <div className='soap-assessment'>
            <h1>Assessment</h1>
              <Editor
                apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                init={{
                  height: 500,
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

          <div className='soap-plan'>
            <h1>Plan</h1>
                <Editor
                  apiKey="qdsfz5mb1rgq6f9e4tlppil5y3suu39z8ln3guyhhbej13qp"
                  init={{
                    height: 500,
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

          <input type="submit" value='save'/>
        </form>
      </div>
    )
  }
}

export default VisitForm
