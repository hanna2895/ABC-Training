import React, { Component } from 'react';
import AdminList from './AdminList';
import AdminShow from './AdminShow';

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
      <div className="admin-holder">
        <AdminShow />
        <AdminList admins={this.state.admins}/>
      </div>
    )
  }
}


export default AdminHolder;
