import React from 'react'
import moment from 'moment'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateObject: moment()
    }
  };

  firstDayOfMonth() {
    const dateObject = this.state.dateObject;
    const firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  render() {
    //Creates header of the seven days of the week
    const weekdayshort = moment.weekdaysShort().map(day => {
      return (
        <th key={day} className='week-day'>
          {day}
        </th>
      );
    });

    //Fills the first week with blank slots until the first day of the month
    let blanks = [];
    for (let i=0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className='calendar-day empty'>{''}</td>
      );
    };

    //Fills the calendar with real slots until the end of the month
    let daysInMonth = [];
    for (let i=1; i <= this.state.dateObject.daysInMonth(); i++) {
      daysInMonth.push(
        <td key={i} className='calendar-day'>{i}</td>
      );
    };

    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let days = rows.map((d, i) => {
      return <tr>{d}</tr>
    });

    return (
      <div className='appointment-calendar'>
        <table>
          <thead>
            <tr>{weekdayshort}</tr>
          </thead>
          <tbody>
            {days}
          </tbody>
        </table>
      </div>
      // 
      // <ul>
      //   {
      //     this.props.appointments.map(appointment => {
      //       const patient = this.props.doctor.patients[appointment.patientId];
      //       return <li key={appointment._id}>{patient.fname + ' ' + patient.lname}</li>
      //     })
      //   }
      // </ul>
    )
  };
};

export default Calendar;