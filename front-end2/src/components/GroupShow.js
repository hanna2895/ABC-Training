import React, { Component } from 'react';
import StudentList from './StudentList';
import GroupInfo from './GroupInfo';

class GroupShow extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      groupId: "",
      group: ""
    }
  }

  componentWillMount = () => {
    console.log(this.props, 'this is props')
    this.setState({
      groupId: this.props.selectedGroupId,
      clientName: this.props.selectedClient
    })

  }

  componentDidMount = () => {
    this.getGroupInfo()
  }
  // function to get the students by group id -> group show
  // maybe receives client name as prop?
  getGroupInfo = async () => {
    const group = await fetch('http://localhost:3000/groups/' + this.state.groupId, {
      method: "GET"
      // credentials: 'include'
    })
    console.log(group, 'this is group')
    const groupParsed = await group.json()
    console.log(groupParsed, 'this is groupParsed')
    this.setState({
      group: groupParsed,
      students: groupParsed.students
    })
  }

  render() {
    console.log(this.state, 'this is state in groupshow')
    // const groupName = () => {
    //   if (this.state.group.group.name) {
    //     return (
    //       <p>this.state.group.group.name</p>
    //     )
    //   }
    // }
    // console.log(groupName)

    return (
      <div className="two-containers">
        {this.state.group !== "" ? <GroupInfo groupName={this.state.group.group.name} clientName={this.props.selectedClient}/> : null}

        <StudentList students={this.state.students}/>
      </div>
    )
  }

}

export default GroupShow;
