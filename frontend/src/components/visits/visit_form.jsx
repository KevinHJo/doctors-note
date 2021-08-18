import React, { Component } from 'react'
import { Editor } from 'tinymce'

class VisitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjective: '',
      objective: '',
      assessment: '',
      plan: ''
    }

    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    e.preventDefault();
    e.target.getContent();
  }
  
  render() {
    return (
      <div className='visit-form'>
        <form className='soap-note'>
          <div className='soap-subjective'>
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
                  'undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright | \
                  bullist numlist outdent indent | help'
              }}
              onChange={this.handleEditorChange}
            />
          </div>

          <div className='soap-objective'>

          </div>

          <div className='soap-assessment'>

          </div>

          <div className='soap-plan'>

          </div>
        </form>
      </div>
    )
  }
}

export default VisitForm
