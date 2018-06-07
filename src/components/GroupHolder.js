import React, { Component } from 'react';
import ClientList from './ClientList';
import GroupList from './GroupList';
import AddGroup from './AddGroup';
import AddClient from './AddClient';
import EditClient from './EditClient';
import GroupShow from './GroupShow';
import DeleteModal from './DeleteModal';

class GroupHolder extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      groups: [],
      addingGroup: false,
      addingClient: false,
      editingClient: false,
      viewGroup: false,
      selectedClient: "",
      selectedClientId: "",
      selectedGroup: "",
      selectedGroupId: "",
      unassignedStudents: [],
      showDeleteModal: false
    }
  }

  componentDidMount() {
    this.updateClientList();
  }

  getClients = async () => {
    const clientsJson = await fetch('https://protected-reaches-40551.herokuapp.com/clients', {
      method: "GET",
      credentials: 'include'
    })
    const clients = await clientsJson.json();
    const clientsArray = clients.clients;
    return clientsArray
  }

  getGroupsByClient = async (id) => {
    const groupsJson = await fetch('https://protected-reaches-40551.herokuapp.com/clients/' + id, {
      method: "GET",
      credentials: "include"
    })

    const groups = await groupsJson.json();
    const client = groups.client.name
    const groupsArray = groups.group
    this.setState({
      groups: groupsArray,
      selectedClient: client,
      selectedClientId: id
    })
  }

  toggleAddGroup = () => {
    this.setState({
      addingGroup: !this.state.addingGroup
    })
    if (this.state.addingGroup) {
      this.getUnassignedStudents()
    }
  }

  getUnassignedStudents = async() => {
    const unassignedJson = await fetch('https://protected-reaches-40551.herokuapp.com/unassigned', {
      method: "GET",
      credentials: 'include'
    })
    const students = await unassignedJson.json();
    this.setState({
      unassignedStudents: students.unassigned_students
    })

  }

  addGroup = async (groupName, selectedStudents) => {
    const group = await fetch('https://protected-reaches-40551.herokuapp.com/groups', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        name: groupName,
        client_id: this.state.selectedClientId
      })
    });
    console.log(group, 'this is group from addgroup')
    const groupParsed = await group.json();
    console.log(groupParsed, 'this is the response')
    this.toggleAddGroup()
    this.getGroupsByClient(this.state.selectedClientId)
    this.updateStudentGroupId(selectedStudents, groupParsed)
  }

  updateStudentGroupId = async (students, groupJson) => {
    console.log(students)
    if (students.length === 0) {
      return;
    } else {
      for (let i = 0; i < students.length; i++) {
        const student = await fetch('https://protected-reaches-40551.herokuapp.com/students/' + students[i].id, {
          method: "PUT",
          credentials: 'include',
          body: JSON.stringify({
            group_id: groupJson.group.id
          })
        });
        console.log(student,' this is the student returned in update student group id')
        const studentParsed = await student.json();
        console.log(studentParsed, 'this is studentparsed')
      }
    }
  }

  toggleAddClient = () => {
    console.log('toggle add client is being clicked')
    this.setState({
      addingClient: !this.state.addingClient
    })
  }

  updateClientList = () => {
    this.getClients()
      .then((clients) => {
        this.setState({clients: clients})
      })
      .catch((err) => {
        console.log(err)
      });
  }

  addClient = async (clientName) => {
    const client = await fetch('https://protected-reaches-40551.herokuapp.com/clients', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        name: clientName
      })
    });
    const clientParsed = await client.json();
    console.log(clientParsed)
    this.toggleAddClient();
    this.updateClientList();
  }

  toggleEditClient = () => {
    if (this.state.selectedClient !== "") {
      this.setState({
        editingClient: !this.state.editingClient
      })
    } else {
      // somehow render a message that says you must first select a client to edit
      // maybe figure out how to grey out the edit button until one is selected
    }
  }

  editClient = async (clientName) => {
    const client = await fetch('https://protected-reaches-40551.herokuapp.com/clients/' + this.state.selectedClientId, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        name: clientName
      })
    })
    const clientParsed = await client.json();
    console.log(clientParsed)
    this.toggleEditClient();
    this.updateClientList()
  }

  toggleGroupShow = (group, groupId) => {
    console.log('togglegroupshow is called')
    console.log(group, groupId, 'this is group and groupId in toggleGroupShow')
    this.setState({
      selectedGroup: group,
      selectedGroupId: groupId,
      viewGroup: !this.state.viewGroup
    })
    console.log(this.state, 'this is state')
  }

  toggleDeleteModal = () => {
    console.log('toggleDeleteModal is being called')
    if (this.state.viewGroup || this.state.selectedClientId !== "") {
      this.setState({
        showDeleteModal: !this.state.showDeleteModal
      })
    }
  }

  deleteClient = async (clientId) => {
    if (clientId !== "") {
      await fetch('https://protected-reaches-40551.herokuapp.com/clients/' + clientId, {
        method: "DELETE",
        credentials: 'include'
      })

      this.setState({
        clients: this.state.clients.filter((client) => {
          return client.id != clientId
        })
      })
    } else {
      // figure out how to set a message that says you must select a client before trying to delete, or gray out the button if it's blank
    }
    this.getClients()
      .then(this.toggleDeleteModal())
  }

  deleteGroup = async (groupId) => {
    if (groupId !== "") {
      await fetch('https://protected-reaches-40551.herokuapp.com/groups/' + groupId, {
        method: "DELETE",
        credentials: 'include'
      })

      this.setState({
        groups: this.state.groups.filter((group) => {
          return group.id != groupId
        })
      })
    } else {
      // message that says you must select a group before deleting it
    }
    this.toggleDeleteModal()
    this.toggleGroupShow()
    this.updateClientList()


  }

  render () {
    return (
      <div>
        {this.state.addingGroup ? <div className="admin-holder" > <AddGroup selectedClient={this.state.selectedClient} unassignedStudents={this.state.unassignedStudents} addGroup={this.addGroup} updateStudentGroupId={this.updateStudentGroupId} toggleAddGroup={this.toggleAddGroup}/> </div>
          : <div> {
            this.state.addingClient ? <div className="admin-holder"> <AddClient addClient={this.addClient} toggleAddClient={this.toggleAddClient}/> </div>
            : <div> {this.state.editingClient ? <div className="admin-holder"> <EditClient selectedClient={this.state.selectedClient} editClient={this.editClient} toggleEditClient={this.toggleEditClient}/> </div>
              : <div >{this.state.viewGroup ? <div className="admin-holder"> <GroupShow selectedGroupId={this.state.selectedGroupId} selectedClient={this.state.selectedClient} toggleDeleteModal={this.toggleDeleteModal} showDeleteModal={this.state.showDeleteModal} deleteGroup={this.deleteGroup} toggleAddGroup={this.toggleAddGroup}/> </div>
                : <div> { this.state.showDeleteModal ? <div><DeleteModal showDeleteModal={this.state.showDeleteModal} toggleDeleteModal={this.toggleDeleteModal} deleteClient={this.deleteClient} selectedClient={this.state.selectedClientId}/></div>
                  : <div className="admin-holder">
                    <ClientList clients={this.state.clients} getGroups={this.getGroupsByClient} toggleAddClient={this.toggleAddClient} toggleEditClient={this.toggleEditClient} toggleDeleteModal={this.toggleDeleteModal} />
                    <GroupList groups={this.state.groups} selectedClient={this.selectedClient} toggleAddGroup={this.toggleAddGroup} toggleGroupShow={this.toggleGroupShow}/>
                  </div>
                }
                </div>

              }</div>
            }
           </div>
        }
        </div>
      }
      </div>
    )
  }

}

export default GroupHolder;
