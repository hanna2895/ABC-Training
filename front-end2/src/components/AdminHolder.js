import React, { Component } from 'react';
import AdminList from './AdminList';

class AdminHolder extends Component {
  constructor() {
    super();
    this.state = {
      admins: []
    }
  }

  componentDidMount() {
    this.getAdmins()
      .then((admins) => {
        this.setState({admins: admins})
      })
      .catch((err) => {
        console.log(err)
      })

  }

  getAdmins = async () => {
    const adminsJson = await fetch('http://localhost:3000/admins', {
      method: "GET"
      // credentials: 'include'
    });
    const admins = await adminsJson.json();
    const adminArray = admins.admins
    return adminArray
  }

  render() {
    return(
      <AdminList admins={this.state.admins}/>
    )
  }
}


export default AdminHolder;
