import React from 'react'

export default class Visit extends React.Component {
  render() {
    return (
    <div>
      <div>
        <p className="" dangerouslySetInnerHTML={{ __html: this.props.visit.createdAt.split("T")[0] }}></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    )
  }
}
