import React from 'react'
import moment from 'moment'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateObject: moment(),
      months: moment.months()
    }
  };

  firstDayOfMonth() {
    const dateObject = this.state.dateObject;
    const firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  currentDay() {
    return this.state.dateObject.format('D');
  }

  createMonthList() {
    const months = this.state.months.map(month => {
      return (
        <td
          key={month}
          className='calendar-month'
          onClick={e => this.setMonth(month)}
        >
          <span>{month}</span>
        </td>
      )
    });

    let rows = [];
    let cells = [];
    months.forEach((month, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(month);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(month);
      }
    });

    rows.push(cells);
    return rows.map((d,i) => {
      return <tr key={i+31}>{d}</tr>
    })
  };
  
  createWeekdayList() {
    return moment.weekdaysShort().map(day => {
      return (
        <th key={day} className='week-day'>
          {day}
        </th>
      );
    });
  }

  createDaysInMonth() {
    //Fills the first week with blank slots until the first day of the month
    let blanks = [];
    for (let i=0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className='calendar-day empty'>{''}</td>
      );
    };

    const appointments = {};
    const monthIdx = this.state.dateObject.month();

    this.props.appointments.forEach(appointment => {
      const date = new Date(appointment.date)
      if (date.getMonth() === monthIdx) {
        const patient = this.props.doctor.patients[appointment.patientId]
        if (appointments[date.getDate()]) {
          appointments[date.getDate()].push(<li key={appointment._id}>{patient.fname + ' ' + patient.lname}</li>)
        } else {
          appointments[date.getDate()] = [<li key={appointment._id}>{patient.fname + ' ' + patient.lname}</li>]
        }
      }
    });

    //Fills the calendar with real slots until the end of the month
    let daysInMonth = [];
    for (let i=1; i <= this.state.dateObject.daysInMonth(); i++) {
      let today = i === this.currentDay() ? 'today' : '';
      daysInMonth.push(
        <td key={i} className={`calendar-day ${today}`}>
          <h4>{i}</h4>
          {appointments[i-1]}
        </td>
      );
    };

    //Combines blank slots with filled slots
    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    //Refactors array into rows of 7 days
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

    //Wraps each inner array in a <tr> tag
    let days = rows.map((d, i) => {
      return <tr key={i+1}>{d}</tr>
    });

    return days;
  }

  setMonth(month) {
    const monthIdx = this.state.months.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthIdx);
    this.setState({
      dateObject: dateObject
    });
  };

  render() {
    return (
      <div className='appointment-calendar'>
        <div className='calendar-nav'>
          {this.state.dateObject.format('MMMM')}
        </div>

        <table className='calendar-months'>
          <thead>
            <tr key={-2}>
              <th colSpan='4'>Select a Month</th>
            </tr>
          </thead>
          <tbody>{this.createMonthList()}</tbody>
        </table>

        <table className='calendar-days'>
          <thead>
            <tr key={-1}>{this.createWeekdayList()}</tr>
          </thead>
          <tbody>
            {this.createDaysInMonth()}
          </tbody>
        </table>
      </div>
    )
  };
};

export default Calendar;