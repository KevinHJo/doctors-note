import React from 'react'
import { Link } from 'react-router-dom'
import ChartsIndexPanel from './charts_index_panel'

export default class ChartsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      patientId: null
    }
  }
  
  // componentDidMount() {
  //   this.props.fetchDoctor(doctorId)
  // }

  handleClick = patientId => e => {
    this.setState({patientId})
  }

  render() {
    const { patients } = this.props
    let selectedPatient = patients.find(patient => patient.id === this.state.patientId)
    return (
      <div>
        <div className='charts-index'>
          {patients.map(patient => 
            <div key={patient.id}>
              <Link to={{pathname: `/charts/${patient.id}`, state: selectedPatient}}>{`${patient.lname}, ${patient.fname}`}</Link>
              <button onClick={this.handleClick(patient.id)}>🔍</button>
            </div>
          )}
        </div>
        <div className='charts-index-panel'>
          {this.state.patientId ? 
          <ChartsIndexPanel patient={selectedPatient} />
          :
          <div></div>
          }
        </div>
      </div>
    )
  }
}

