import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VisitsIndex extends Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.patient._id)
  }

  render() {
    if (this.props.patient) {
      const { _id, visits } = this.props.patient
      if (Object.values(visits).length === 0) {
        return (
          <div id='no-visits'>
            <p className="no-visits-title">No recent visits.</p>
          </div>
        )
      }
      return (
        <ul className='visits-index'>
          {Object.values(visits).map(visit => {
            return (
              <li key={visit._id} className='visit-link'>
                <Link
                  to={{pathname: `${_id}/${visit._id}`, state: {patient: this.props.patient, visit: visit}}}
                  className="visit-date-links"
                >
                  {new Date(visit.createdAt).toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
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