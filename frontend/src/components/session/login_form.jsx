import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          <input type="text" placeholder="Username or email"></input>
        </label>
        <label>
          <input type="password" placeholder="Password"></input>
        </label>
        <input type="submit"/>
      </form>
    )
  }
}
