import React from 'react'
import moment from 'moment'
import AppointmentForm from './appointment_form'
import AppointmentShow from './appointment_show'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateObject: moment(),
      currentDate: moment(),
      months: moment.months(),
      showCalendar: true,
      showMonthTable: false,
      showYearTable: false,
      showAppointment: false,
      showAppointmentForm: false,
      selectedDate: moment(),
      selectedAppointment: null
    }

    this.createYearList = this.createYearList.bind(this);
    this.renderAppointment = this.renderAppointment.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.toggleAppointmentShow = this.toggleAppointmentShow.bind(this);
  };

  firstDayOfMonth() {
    const dateObject = this.state.dateObject;
    const firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  currentDay() {
    return parseInt(this.state.currentDate.format('D'));
  }

  displayCurrentYear() {
    return this.state.dateObject.format("Y");
  }

  createYearList() {
    let years = [];
    for (let i=-10; i<=10; i++) {
      const currentYear = moment();
      years.push(currentYear.add(i, 'year').format('YYYY'))
    }

    years = years.map(year => {
      return (
        <td
          key={year}
          className='calendar-year'
          onClick={() => {
            this.setYear(year);
          }}
        >
          <span>{year}</span>
        </td>
      )
    });

    let rows = [];
    let cells = [];
    years.forEach((year, i) => {
      if (i % 7 !== 0 || i === 0) {
        cells.push(year);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(year);
      }
    });

    rows.push(cells);
    return rows.map((d,i) => {
      return <tr key={i+31}>{d}</tr>
    })
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
      if (i % 3 !== 0 || i === 0) {
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

  selectDay(e, i) {
    const selectedDate = this.state.dateObject;
    selectedDate.set('date', i)
    this.setState({selectedDate, showAppointmentForm: !this.state.showAppointmentForm})
  }

  toggleAppointmentShow(e, appointment) {
    this.setState({
      showAppointment: !this.state.showAppointment, 
      showAppointmentForm: false, 
      selectedAppointment: appointment
    })
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
    const selectedYear = parseInt(this.state.dateObject.format("Y"))

    this.props.appointments.forEach(appointment => {
      const date = new Date(appointment.date)
      if (date.getMonth() === monthIdx && date.getFullYear() === selectedYear) {
        const patient = this.props.doctor.patients[appointment.patientId]
        if (appointments[date.getDate()]) {
          appointments[date.getDate()].push(<li key={appointment._id} className='calendar-appointment' onClick={e => this.toggleAppointmentShow(e, appointment)}>{patient.lname + ', ' + patient.fname}</li>)
        } else {
          appointments[date.getDate()] = [<li key={appointment._id} className='calendar-appointment' onClick={e => this.toggleAppointmentShow(e, appointment)}>{patient.lname + ', ' + patient.fname}</li>]
        }
      }
    });

    //Fills the calendar with real slots until the end of the month
    let daysInMonth = [];
    for (let i=1; i <= this.state.dateObject.daysInMonth(); i++) {
      let today = ((i === this.currentDay()) && (this.state.currentDate.month() === monthIdx)) ? 'today' : '';
      daysInMonth.push(
        <td key={i} className={`calendar-day ${today}`} onClick={e => this.selectDay(e, i)}>
          <h4>{i}</h4>
          {appointments[i]}
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

  setYear(year) {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('year', year);
    this.setState({
      dateObject: dateObject,
      showYearTable: false,
      showCalendar: true,
      showMonthTable: false
    });
  };

  setMonth(month) {
    const monthIdx = this.state.months.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthIdx);
    this.setState({
      dateObject: dateObject,
      showYearTable: false,
      showCalendar: true,
      showMonthTable: false
    });
  };

  toggleMonthTable() {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showYearTable: false
    });
  };

  toggleYearTable() {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showMonthTable: false
    });
  };

  onPrev() {
    let curr = '';
    if (this.state.showYearTable) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
      showCalendar: true,
      showMonthTable: false,
      showYearTable: false
    });
  };

  onNext() {
    let curr = '';
    if (this.state.showYearTable) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
      showCalendar: true,
      showMonthTable: false,
      showYearTable: false
    });
  }

  pickRender() {
    if (this.state.showMonthTable) {
      return (
        <table className='calendar-months'>
          <thead>
            <tr key={-2}>
              <th colSpan='4'>Select a Month</th>
            </tr>
          </thead>
          <tbody>{this.createMonthList()}</tbody>
        </table>
      )
    } else if (this.state.showYearTable) {
      return (
        <table className='calendar-years'>
          <thead>
            <tr key={-3}>
              <th colSpan='7'>Select a Year</th>
            </tr>
          </thead>
          <tbody>{this.createYearList()}</tbody>
        </table>
      )
    } else if(this.state.showCalendar) {
      return (
        <table className='calendar-days'>
          <thead>
            <tr key={-1}>{this.createWeekdayList()}</tr>
          </thead>
          <tbody>
            {this.createDaysInMonth()}
          </tbody>
        </table>
      )
    }
  }

  toggleAppointmentForm() {
    this.setState({showAppointmentForm: !this.state.showAppointmentForm})
  }

  renderAppointment() {
    if (this.state.showAppointment) {
      return <AppointmentShow doctor={this.props.doctor} date={this.state.selectedDate} appointment={this.state.selectedAppointment} toggleAppointmentShow={this.toggleAppointmentShow}/>
    }
    else if (this.state.showAppointmentForm) {
      return <AppointmentForm doctor={this.props.doctor} date={this.state.selectedDate} createAppointment={this.props.createAppointment} toggleAppointmentForm={this.toggleAppointmentForm.bind(this)}/>
    }
  }

  render() {
    return (
      <div>
        {this.renderAppointment()}
        <div className='appointment-calendar'>
          <div id='calendar-header'>
            <div className='calendar-nav' >
              <div id='calendar-nav-left' onClick={this.onPrev.bind(this)}>
                <i className="fas fa-caret-left"></i>
              </div>
              <div className='calendar-month' onClick={this.toggleMonthTable.bind(this)}>
                {this.state.dateObject.format('MMMM')}
              </div>
              <div className='calendar-year' onClick={this.toggleYearTable.bind(this)}>
                {this.displayCurrentYear()}
              </div>
              <div id='calendar-nav-right' onClick={this.onNext.bind(this)}>
                <i className="fas fa-caret-right"></i>
              </div>
            </div>
          </div>
          

          {this.pickRender()}        
        </div>
      </div>
        
    )
  };
};

export default Calendar;