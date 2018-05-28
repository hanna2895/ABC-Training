import React, { Component } from 'react';
import ClientList from './ClientList';
import GroupList from './GroupList';

// list the clients
// when the user clicks on a client
// populate the group list box with that client's Groups

class GroupHolder extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      groups: []
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
    console.log(groups, 'this is groups')
    const groupsArray = groups.group
    console.log(groupsArray, 'this is groups array')
    this.setState({
      groups: groupsArray
    })
    console.log(this.state, 'this is state')
  }

  render () {
    return (
      <div className="admin-holder">
        <ClientList clients={this.state.clients} getGroups={this.getGroupsByClient}/>
        <GroupList groups={this.state.groups} />
      </div>
    )
  }

}

export default GroupHolder;
