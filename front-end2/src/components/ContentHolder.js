import React, { Component } from 'react';
import AdminHolder from './AdminHolder';
import UserHolder from './UserHolder';
import GroupHolder from './GroupHolder';
import MaterialHolder from './MaterialHolder';
import Nav2 from './Nav2';

class ContentHolder extends Component {
  constructor() {
    super();
    this.state = {
      showSettings: true,
      showGroups: false,
      showUsers: false,
      showCourseMaterials: false
    }
  }

  clickSettings = () => {
    this.setState({
      showSettings: true,
      showGroups: false,
      showUsers: false,
      showCourseMaterials: false
    })
  }

  clickGroups = () => {
    this.setState({
      showSettings: false,
      showGroups: true,
      showUsers: false,
      showCourseMaterials: false
    })
  }

  clickUsers = () => {
    console.log(this)
    this.setState({
      showSettings: false,
      showGroups: false,
      showUsers: true,
      showCourseMaterials: false
    })
  }

  clickCourseMaterials = () => {
    this.setState({
      showSettings: false,
      showGroups: false,
      showUsers: false,
      showCourseMaterials: true
    })
  }

  render() {
    return (
      <div className="content-holder">
        <p> This is the content holder </p>
        <Nav2 clickUsers={this.clickUsers} clickSettings={this.clickSettings} clickGroups={this.clickGroups} clickCourseMaterials={this.clickCourseMaterials} />

        {this.state.showSettings ? <AdminHolder /> : null }
        {this.state.showUsers ? <UserHolder /> : null}
        {this.state.showGroups ? <GroupHolder /> : null }
        {this.state.showCourseMaterials ? <MaterialHolder /> : null}
      </div>
    )
  }

}

export default ContentHolder;
