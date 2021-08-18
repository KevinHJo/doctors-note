import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VisitsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    if (this.props.patient) {
      const { _id, visits } = this.props.patient
      return (
        <ul className='visits-index'>
          {visits.map(visit => {
            return (
              <li key={visit.id} className='visit-link'>
                <Link to={{pathname: `charts/${_id}/${visit.id}`, state: {patient: this.props.patient, visit: visit}}}>
                  {
                    visit.aggregate({
                      $project: {
                        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
                      }
                    }).date
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