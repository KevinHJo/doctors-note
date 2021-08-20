import React from 'react'
import NavBarContainer from '../navbar/top_nav_bar_container';
import DoctorLeftNavigation from './doctor_left_navigation';

export default class DoctorIndexPage extends React.Component {
  componentDidMount() {
    this.props.fetchDoctor(this.props.user.id)
  }
  
  render() {
    return (
      <div>
        <NavBarContainer />
        <DoctorLeftNavigation toggleModal={this.props.toggleModal} modal={this.props.modal} />
      </div>
    )
  }
}
