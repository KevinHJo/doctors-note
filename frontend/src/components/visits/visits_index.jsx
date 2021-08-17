import React, { Component } from 'react';
import Link from 'react-router-dom';

class VisitsIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const visits = this.props.patient.visits

    return (
      <ul className='visits-index'>
        {visits.map(visit => {
          return (
            <li key={visit.id}>
              <Link to={`charts/${this.props.patient.id}/${visit.id}`}>{visit.date}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default VisitsIndex