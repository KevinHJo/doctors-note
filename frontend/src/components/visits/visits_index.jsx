import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VisitsIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, visits } = this.props.patient

    return (
      <ul className='visits-index'>
        {visits.map(visit => {
          return (
            <li key={visit.id} className='visit-link'>
              <Link to={`charts/${_id}/${visit.id}`}>
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
  }
}

export default VisitsIndex