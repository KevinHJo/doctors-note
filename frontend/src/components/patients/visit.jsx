import React from 'react';
import moment from 'moment';

export default class Visit extends React.Component {
  render() {
    return (
    <div className="visit-sections">
      <div>
        <p className="title">Date of Visit:</p>
        <p className='desc desc1' >{new moment(this.props.visit.createdAt).format('dddd, MMMM Do YYYY')}</p>
      </div>
      <div>
        <p className="title">Reason for Visit:</p>
        <p className="desc desc2" dangerouslySetInnerHTML={{ __html: this.props.visit.subjective }}></p>
      </div>
      <div>
        <p className="title">Doctor's Recommended Plan:</p>
        <p className="desc desc3" dangerouslySetInnerHTML={{ __html: this.props.visit.plan }}></p>
      </div>
      <div>
        <p className="title">Prescribed Medications:</p>
        <p className="desc desc4">None.</p>
      </div>
    </div>
    )
  }
}
