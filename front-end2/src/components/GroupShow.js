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
      group: "This client does not yet have any groups. Would you like to create one?",
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
    if (this.state.groupId) {
      const group = await fetch('http://localhost:3000/groups/' + this.state.groupId, {
        method: "GET",
        credentials: 'include'
      })
      const groupParsed = await group.json()
      console.log(groupParsed)
      const groupName = groupParsed.group.name
      console.log(groupName)
      this.setState({
        group: groupParsed,
        groupName: groupName,
        students: groupParsed.students
      })
    }

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


  render() { // student list here is the list of students in the group. it is already styled.
    console.log(this.state, 'this is state in groupshow')
    return (
      <div>
        {this.state.editingGroup ? <div> <EditGroup groupName={this.state.group.group.name} editGroup={this.editGroup} toggleEditGroup={this.toggleEditGroup}/> </div>
          : <div> { this.props.showDeleteModal ? <DeleteModal selectedGroup={this.state.groupId} deleteGroup={this.props.deleteGroup} toggleDeleteModal={this.props.toggleDeleteModal} showDeleteModal={this.props.showDeleteModal}/>
            : <div className="two-containers">
            {this.state.group !== "" ? <GroupInfo groupName={this.state.groupName} clientName={this.props.selectedClient} toggleEditGroup={this.toggleEditGroup} toggleDeleteModal={this.props.toggleDeleteModal} toggleAddGroup={this.props.toggleAddGroup}/>
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
