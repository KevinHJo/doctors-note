import React from 'react'
import { Link } from 'react-router-dom'
import ChartsIndexPanel from './charts_index_panel'

export default class ChartsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      patientId: null
    }

    // this.openChart = this.openChart.bind(this);
  }
  
  componentDidMount() {
    // this.props.fetchDoctor(this.props.doctorId)
  }

  handleClick = patientId => e => {
    this.setState({patientId})
    console.log(this.state)
  }

  // openChart(id) {
  //   this.props.fetchPatient(id)
  //   // this.props.receiveChart(id);
  // }
  
  render() {
    // if (!!this.props.patients) {
    //   const { patients } = this.props
    //   let selectedPatient = patients.find(patient => patient.id === this.state.patientId)
    // }
    if (!this.props.isDataReady) return null
    const { patients } = this.props
    let selectedPatient = '';
    if (!!patients) {
      selectedPatient = patients.find(patient => patient._id === this.state.patientId)
    }
    return (
      <div id="doctor-charts">
        <div className='charts-index'>
          {!!patients ? 
            (patients.map(patient => 
              <div key={patient._id} className='patients-charts'>
                <Link className="patients-chart-links" to={`/charts/${patient._id}`}>{`${patient.lname}, ${patient.fname}`}</Link>
                {/* <div onClick={() => this.openChart(patient._id)}>
                  {patient.lname}, {patient.fname}
                </div> */}
                <button className="patients-chart-toggle" onClick={this.handleClick(patient._id)}>{`View recent visit >`}</button>
              </div>
            )) : (
              ''
            )
          }
        </div>
        <div className='charts-index-panel'>
          {this.state.patientId ? 
          <ChartsIndexPanel patient={selectedPatient} />
          :
          <div>
            <p>Select patient tab to view.</p>
          </div>
          }
        </div>
      </div>
    )
  }
}

