import React from 'react'

export default class MedicalHistory extends React.Component {
  render() {
    let diagnoses = [];
    let allergies = [];
    let medications = [];
    if (this.props.user) {
      if (this.props.user.diagnoses) {
        this.props.user.diagnoses.map((diag, idx) => {
          diagnoses.push(
            <li className="diag-desc" key={idx}>{diag}</li>
          )
        })
      }
      if (this.props.user.allergies) {
        this.props.user.allergies.map((diag, idx) => {
          allergies.push(
            <li className="diag-desc" key={idx}>{diag}</li>
          )
        })
      }
      if (this.props.user.medications) {
        this.props.user.medications.map((diag, idx) => {
          medications.push(
            <li className="diag-desc" key={idx}>{diag}</li>
          )
        })
      }
    }
    
    return (
      <div className="medical-history-component">
        <p className="medical-history-title">Medical History</p>
        <div className="medical-history-main-section">
          <div className="medical-history-sections">
            <p className="desc">Previous Diagnoses:</p>
            {diagnoses}
          </div>
          <div className="medical-history-sections">
            <p className="desc">Known Allergies:</p>
            {allergies}
          </div>
          <div className="medical-history-sections">
            <p className="desc">Current Medications:</p>
            {medications}
          </div>
        </div>
      </div>
    )
  }
}
