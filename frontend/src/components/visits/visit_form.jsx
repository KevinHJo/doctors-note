import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'

class VisitForm extends Component {
  constructor(props) {
    super(props);
    const {visit} = this.props
    this.state = {
      subjective: visit.subjective,
      objective: visit.objective,
      assessment: visit.assessment,
      plan: visit.plan
    }

    this.handleSubjectiveChange = this.handleSubjectiveChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  handleSubjectiveChange(value) {
    debugger
    this.setState({subjective: value})
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
                onEditorChange={this.handleSubjectiveChange}
                value={this.state.objective}
              />
          </div>

          <div className='soap-assessment'>

          </div>

          <div className='soap-plan'>

          </div>

          <input type="submit" value='save'/>
        </form>
      </div>
    )
  }
}

export default VisitForm
