import React, { Component } from 'react';
import AdminHolder from './AdminHolder';
import StudentHolder from './StudentHolder';
import GroupHolder from './GroupHolder';
import MaterialHolder from './MaterialHolder';
import Nav2 from './Nav2';

class ContentHolder extends Component {
  constructor() {
    super();
    this.state = {
      showSettings: true,
      showGroups: false,
      showStudents: false,
      showCourseMaterials: false
    }
  }

  clickSettings = () => {
    this.setState({
      showSettings: true,
      showGroups: false,
      showStudents: false,
      showCourseMaterials: false
    })
  }

  clickGroups = () => {
    this.setState({
      showSettings: false,
      showGroups: true,
      showStudents: false,
      showCourseMaterials: false
    })
  }

  clickStudents = () => {
    console.log(this)
    this.setState({
      showSettings: false,
      showGroups: false,
      showStudents: true,
      showCourseMaterials: false
    })
  }

  clickCourseMaterials = () => {
    this.setState({
      showSettings: false,
      showGroups: false,
      showStudents: false,
      showCourseMaterials: true
    })
  }

  render() {
    return (
      <div className="content-holder">
        <p> This is the content holder </p>
        <Nav2 clickStudents={this.clickStudents} clickSettings={this.clickSettings} clickGroups={this.clickGroups} clickCourseMaterials={this.clickCourseMaterials} />

        {this.state.showSettings ? <AdminHolder /> : null }
        {this.state.showStudents ? <StudentHolder /> : null}
        {this.state.showGroups ? <GroupHolder /> : null }
        {this.state.showCourseMaterials ? <MaterialHolder /> : null}
      </div>
    )
  }

}

export default ContentHolder;
