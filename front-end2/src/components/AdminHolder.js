import React, { Component } from 'react';
import AdminList from './AdminList';
import AdminShow from './AdminShow';
import { connect } from 'react-redux';
import EditAdmin from './EditAdmin';
import AddAdmin from './AddAdmin';

class AdminHolder extends Component {
  constructor() {
    super();
    this.state = {
      admins: [],
      adminName: "",
      email: "",
      isLeadAdmin: "",
      editingAdmin: false,
      addAdmin: false
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
    this.showLoggedAdmin()
  }

  getAdmins = async () => {
    const adminsJson = await fetch('http://localhost:3000/admins', {
      method: "GET",
      credentials: 'include'
    });
    const admins = await adminsJson.json();
    const adminArray = admins.admins
    return adminArray
  }

  showLoggedAdmin = async () => {
    const adminJson = await fetch('http://localhost:3000/admins/' + this.props.logged_in.user_id, {
      method: "GET",
      credentials: 'include'
    })
    const admin = await adminJson.json();
    this.setState({
      adminName: admin.admin.name,
      email: admin.admin.email,
      isLeadAdmin: admin.admin.is_lead_admin
    })
  }

  toggleEditAdmin = () => {
    this.setState({
      editingAdmin: !this.state.editingAdmin
    })
  }

  editAdmin = async (adminName, email, password) => {
    console.log('editadmin clicked')
    const admin = await fetch('http://localhost:3000/admins/' + this.props.logged_in.user_id, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        name: adminName,
        email: email,
        password: password
      })
    })
    const adminParsed = await admin.json()
    this.toggleEditAdmin();
    this.showLoggedAdmin();
  }

  toggleAddAdmin = () => {
    this.setState({
      addAdmin: !this.state.addAdmin
    })
  }

  render() {
    return(
      <div className="admin-holder">
        {this.state.editingAdmin ? <EditAdmin adminName={this.state.adminName} email={this.state.email} isLeadAdmin={this.state.isLeadAdmin} editAdmin={this.editAdmin}/>
        : <div>{ this.state.addAdmin ? <AddAdmin />
          : <div>
            <AdminShow adminName={this.state.adminName} email={this.state.email} toggleEditAdmin={this.toggleEditAdmin} isLeadAdmin={this.state.isLeadAdmin}/>
            <AdminList admins={this.state.admins}/>
          </div>

          } </div>

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

export default connect(mapStateToProps)(AdminHolder)
