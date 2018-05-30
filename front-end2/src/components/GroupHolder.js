import React, { Component } from 'react';
import ClientList from './ClientList';
import GroupList from './GroupList';
import AddGroup from './AddGroup';
import AddClient from './AddClient';


class GroupHolder extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      groups: [],
      addingGroup: false,
      addingClient: false,
      selectedClient: "",
      selectedClientId: "",
      unassignedStudents: []
    }
  }

  componentDidMount() {
    this.getClients()
      .then((clients) => {
        this.setState({clients: clients})
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getClients = async () => {
    const clientsJson = await fetch('http://localhost:3000/clients', {
      method: "GET"
      // credentials: 'include'
    })
    const clients = await clientsJson.json();
    const clientsArray = clients.clients;
    return clientsArray
  }

  getGroupsByClient = async (id) => {
    const groupsJson = await fetch('http://localhost:3000/clients/' + id, {
      method: "GET"
      // credentials: "include"
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
    const unassignedJson = await fetch('http://localhost:3000/unassigned', {
      method: "GET"
      // credentials: 'include'
    })
    const students = await unassignedJson.json();
    this.setState({
      unassignedStudents: students.unassigned_students
    })

  }

  addGroup = async (groupName, selectedStudents) => {
    const group = await fetch('http://localhost:3000/groups', {
      method: "POST",
      // credentials: 'include',
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
        const student = await fetch('http://localhost:3000/students/' + students[i].id, {
          method: "PUT",
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

  addClient = async (clientName) => {
    const client = await fetch('http://localhost:3000/clients', {
      method: "POST",
      // credentials: 'include',
      body: JSON.stringify({
        name: clientName
      })
    });
    const clientParsed = await client.json();
    console.log(clientParsed)
    this.toggleAddClient()
    this.getClients()
      .then((clients) => {
        this.setState({clients: clients})
      })
      .catch((err) => {
        console.log(err)
      });
  }


  render () {
    return (
      <div>
        {this.state.addingGroup ? <div className="admin-holder" > <AddGroup selectedClient={this.state.selectedClient} unassignedStudents={this.state.unassignedStudents} addGroup={this.addGroup} updateStudentGroupId={this.updateStudentGroupId}/> </div>
          : <div> {
            this.state.addingClient ? <div className="admin-holder"> <AddClient addClient={this.addClient}/> </div>
            : <div className="admin-holder">
              <ClientList clients={this.state.clients} getGroups={this.getGroupsByClient} toggleAddClient={this.toggleAddClient}/>
              <GroupList groups={this.state.groups} selectedClient={this.selectedClient} toggleAddGroup={this.toggleAddGroup} />
            </div>
          } </div>
        }

      </div>
    )
  }

}

export default GroupHolder;
