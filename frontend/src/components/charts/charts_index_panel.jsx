import React from 'react'
import { getLastVisit } from '../../util/chart_util'


export default class ChartsIndexPanel extends React.Component {
  render() {
    const { visits } = this.props.patient
    const lastVisit = getLastVisit(visits)
    if (!lastVisit) return <div id="last-visit-details"><h1>No past visits</h1></div>
    return (
      <div id="last-visit-details">
        <h1>{this.props.patient.fname} {this.props.patient.lname},</h1>
        <h1 className="visit-header">Last visit on {new Date(lastVisit.createdAt).toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</h1>
        <div>
          <p className="visit-title">Subjective: </p>
          <p className="visit-desc" dangerouslySetInnerHTML={{ __html: lastVisit.subjective }}></p>
        </div>
        <div>
          <p className="visit-title">Objective: </p>
          <p className="visit-desc" dangerouslySetInnerHTML={{ __html: lastVisit.objective }}></p>
        </div>
        <div>
          <p className="visit-title">Assessment: </p>
          <p className="visit-desc" dangerouslySetInnerHTML={{ __html: lastVisit.assessment }}></p>
        </div>
        <div>
          <p className="visit-title">Plan: </p>
          <p className="visit-desc" dangerouslySetInnerHTML={{ __html: lastVisit.plan }}></p>
        </div>
      </div>
    )
  }
}
