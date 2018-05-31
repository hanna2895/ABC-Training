import React, { Component } from 'react';
import StudentList from './StudentList';
import GroupInfo from './GroupInfo';
import EditGroup from './EditGroup';
import DeleteModal from './DeleteModal';

class GroupShow extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      groupId: "",
      group: "",
      editingGroup: false
    }
  }

  componentWillMount = () => {
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
      method: "GET",
      credentials: 'include'
    })
    const groupParsed = await group.json()
    this.setState({
      group: groupParsed,
      students: groupParsed.students
    })
  }

  toggleEditGroup = () => {
    console.log('toggle edit group is being clicked')
    this.setState({
      editingGroup: !this.state.editingGroup
    })
  }

  editGroup = async (groupName) => {
    console.log('this is what is being called', groupName, this.state.groupId)
    const group = await fetch('http://localhost:3000/groups/' + this.state.groupId, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        name: groupName
      })
    })
    const groupParsed = await group.json();
    console.log(groupParsed, 'this is group parsed')
    this.toggleEditGroup();
    this.getGroupInfo();
  }


  render() {

    return (
      <div>
        {this.state.editingGroup ? <div> <EditGroup groupName={this.state.group.group.name} editGroup={this.editGroup}/> </div>
          : <div> { this.props.showDeleteModal ? <DeleteModal selectedGroup={this.state.groupId} deleteGroup={this.props.deleteGroup}/>
            : <div className="two-containers">
            {this.state.group !== "" ? <GroupInfo groupName={this.state.group.group.name} clientName={this.props.selectedClient} toggleEditGroup={this.toggleEditGroup} toggleDeleteModal={this.props.toggleDeleteModal}/>
              : null }
            <StudentList students={this.state.students}/>
            </div>
          } </div>

        }
      </div>
    )
  }

}

export default GroupShow;
