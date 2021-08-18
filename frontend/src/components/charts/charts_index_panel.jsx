import React from 'react'

export default class ChartsIndexPanel extends React.Component {
  render() {
    const { patient } = this.props
    return (
      <div>
        <h1>Last visit on (insert date/time?)</h1>
        <div>
          <p>Subjective: </p>
          <p>{patient.subjective}</p>
        </div>
        <div>
          <p>Objective: </p>
          <p>{patient.objective}</p>
        </div>
        <div>
          <p>Assessment: </p>
          <p>{patient.assessment}</p>
        </div>
        <div>
          <p>Plan: </p>
          <p>{patient.plan}</p>
        </div>
      </div>
    )
  }
}
