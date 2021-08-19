import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VisitsIndex extends Component {

  render() {
    if (this.props.patient) {
      console.log(this.props.patient)
      const { _id, visits } = this.props.patient
      return (
        <ul className='visits-index'>
          {Object.values(visits).map(visit => {
            return (
              <li key={visit._id} className='visit-link'>
                <Link to={{pathname: `${_id}/${visit._id}`, state: {patient: this.props.patient, visit: visit}}}>
                  {/* {
                    visit.aggregate({
                      $project: {
                        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
                      }
                    }).date
                  }
                  */}
                  {
                    visit.createdAt.slice(0,10)
                  }
                </Link>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return null
    }
  }
}

export default VisitsIndex