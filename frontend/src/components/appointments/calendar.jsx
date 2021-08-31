import React from 'react'

class Calendar extends React.Component {
  render() {
    return (
      // <table>
      //   <td>
      //     <div>hello</div>
      //     <div>goodbye</div>
      //   </td>
      //   <td>
      //     <div>hello</div>
      //     <div>goodbye</div>
      //   </td>
      // </table>
      <ul>
        {
          this.props.appointments.map(appointment => {
            const patient = this.props.doctor.patients[appointment.patientId];
            return <li key={appointment._id}>{patient.fname + ' ' + patient.lname}</li>
          })
        }
      </ul>
    )
  }
}

export default Calendar;