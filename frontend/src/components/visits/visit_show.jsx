import React, { Component } from 'react'
import VisitForm from './visit_form'

class VisitShow extends Component {
  constructor(props) {
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {

  }

  render() {
    // const {note} = this.props

    return (
      <div className='visit-show'>
        <div className='soap-note'>
          <div className='soap-subjective'>
            {/* {note.subjective} */}
          </div>

          <div className='soap-objective'>
            {/* {note.objective} */}
          </div>

          <div className='soap-assessment'>
            {/* {note.assessment} */}
          </div>

          <div className='soap-plan'>
            {/* {note.plan} */}
          </div>
        </div>
      </div>
    )
  }
}

export default VisitShow
