import React from 'react'
import Visit from './visit'

export default class Visits extends React.Component {
  render() {
    let eachVisit = [];
    
    if (this.props.user && this.props.user.visits) {
      let visits = Object.values(this.props.user.visits)
      visits.forEach((visit, idx) => {
        eachVisit.push(
          <section key={idx} className="visit-container">
            <Visit visit={visit} />
          </section>
        )
      })
    }
    
    return (
      <div id="patient-home-visits">
        <p id="patient-home-visits-title">Recent Visits</p>
        {eachVisit}
      </div>
    )
  }
}
