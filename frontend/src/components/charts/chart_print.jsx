import React from 'react'
import { Link } from 'react-router-dom'

export default class ChartPrint extends React.Component {
  componentDidMount() {
    // window.open(`mailto:${this.state.email}?subject=${'Your patient username and password'}&body=${`Username: ${'a'}\nPassword: ${'b'}`}`)
    // window.print()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps)
  //   console.log(this.props)
  //   if (prevProps.location.state !== this.props.location.state) window.print()
  // }

  handlePrint = e => {
    window.print()
  }

  handleEmail = e => {
    const { state } = this.props.location
    window.open(`mailto:${state.email}?subject=${'Your patient username and password'}&body=${`Username: ${state.username}
    Password: ${state.pw}`}`)
  }

  render() {
    if (!this.props.location.state) return null
    console.log(this.props)
    const { state } = this.props.location
    return (
      <div>
        <p>{`Username: ${state.username}`}</p>
        <p>{`Password: ${state.pw}`}</p>
        <button onClick={this.handlePrint}>Print</button>
        <button onClick={this.handleEmail}>Email</button>
        <Link to={`/charts/${state._id}`}>Chart</Link>
      </div>
    )
  }
}
