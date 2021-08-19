import React from 'react'

export default class UserInformation extends React.Component {
  render() {
    return (
      <div>
        <p>User Information</p>
        <p>First Name: {this.props.user.fname}</p>
        <p>Last Name: {this.props.user.lname}</p>
        <p>Date of Birth: {this.props.user.dateOfBirth.split("T")[0]}</p>
      </div>
    )
  }
}
