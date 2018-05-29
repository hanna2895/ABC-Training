import React, { Component } from 'react';
import ClientList from './ClientList';
import GroupList from './GroupList';
import AddGroup from './AddGroup';

// list the clients
// when the user clicks on a client
// populate the group list box with that client's Groups

class GroupHolder extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      groups: [],
      addingGroup: false,
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

  // componentDidUpdate() {
  //   if (this.state.selectedClient != "") {
  //     this.getGroupsByClient(this.state.selectedClientId)
  //       .then((groups) => {
  //         this.setState({
  //           groups: groups
  //         })
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       });
  //   }
  // }

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
    console.log('toggleAddGroup is being called')
    this.setState({
      addingGroup: !this.state.addingGroup
    })
    this.getUnassignedStudents()
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

  // make a function that gets all the users that are not assigned to a group to populate the add group form
  // then will need an edit user function that edits the group id of those users

  addGroup = async (groupName) => {
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
  }

  render () {
    return (
      <div>
        {this.state.addingGroup ? <div className="admin-holder" > <AddGroup selectedClient={this.state.selectedClient} unassignedStudents={this.state.unassignedStudents} addGroup={this.addGroup}/> </div>
          : <div className="admin-holder">
            <ClientList clients={this.state.clients} getGroups={this.getGroupsByClient}/>
            <GroupList groups={this.state.groups} selectedClient={this.selectedClient} toggleAddGroup={this.toggleAddGroup} />
          </div>
        }

      </div>
    )
  }

}

export default GroupHolder;
