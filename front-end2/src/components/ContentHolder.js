import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHolder from './AdminHolder';
import StudentHolder from './StudentHolder';
import GroupHolder from './GroupHolder';
import MaterialHolder from './MaterialHolder';
import Nav2 from './Nav2';
import StudentNav from './StudentNav';
import StudentShow from './StudentShow';
import StudentMaterialHolder from './StudentMaterialHolder';

class ContentHolder extends Component {
  constructor() {
    super();
    this.state = {
      showSettings: true,
      showGroups: false,
      showStudents: false,
      showCourseMaterials: false,
      showStudentCourseMaterials: true,
      showStudentSettings: false
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

  toggleStudentView = () => {
    this.setState({
      showStudentCourseMaterials: !this.state.showStudentCourseMaterials
    })
  }

  render() {
    const is_admin = () => {
      if (this.props.logged_in.user_type === "admin") {
        return true;
      } else {
        return false
      }
    }


    return (
      <div>
        {is_admin() ?
          <div >
            <Nav2 clickStudents={this.clickStudents} clickSettings={this.clickSettings} clickGroups={this.clickGroups} clickCourseMaterials={this.clickCourseMaterials} />

            {this.state.showSettings ? <AdminHolder /> : null }
            {this.state.showStudents ? <StudentHolder /> : null}
            {this.state.showGroups ? <GroupHolder /> : null }
            {this.state.showCourseMaterials ? <MaterialHolder /> : null}
            </div>
            : <div>
              <StudentNav toggleStudentView={this.toggleStudentView}/>
              {this.state.showStudentCourseMaterials ? <StudentMaterialHolder /> : <StudentShow />}
            </div>
          }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    logged_in: state.logged_in
  }
}

export default connect(mapStateToProps)(ContentHolder);
