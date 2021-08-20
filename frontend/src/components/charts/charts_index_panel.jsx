import React from 'react'
import { getLastVisit } from '../../util/chart_util'


export default class ChartsIndexPanel extends React.Component {
  render() {
    console.log(this.props)
    const { visits } = this.props.patient
    console.log(visits)
    const lastVisit = getLastVisit(visits)
    console.log(lastVisit)
    if (!lastVisit) return <div><h1>No past visits</h1></div>
    return (
      <div>
        <h1>Last visit on {new Date(lastVisit.createdAt).toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</h1>
        <div>
          <p>Subjective: </p>
          <p>{lastVisit.subjective}</p>
        </div>
        <div>
          <p>Objective: </p>
          <p>{lastVisit.objective}</p>
        </div>
        <div>
          <p>Assessment: </p>
          <p>{lastVisit.assessment}</p>
        </div>
        <div>
          <p>Plan: </p>
          <p>{lastVisit.plan}</p>
        </div>
      </div>
    )
  }
}
