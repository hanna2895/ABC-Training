import React, { Component } from 'react';
import AdminList from './AdminList';
import AdminShow from './AdminShow';
import { connect } from 'react-redux';
import EditAdmin from './EditAdmin';
import AddAdmin from './AddAdmin';
import DeleteModal from './DeleteModal'


class AdminHolder extends Component {
  constructor() {
    super();
    this.state = {
      admins: [],
      adminName: "",
      email: "",
      isLeadAdmin: "",
      editingAdmin: false,
      addAdmin: false,
      showDeleteModal: false
    }
  }

  componentDidMount() {
    this.loadAdminList()
    this.showLoggedAdmin()
  }

  loadAdminList = () => {
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

  addAdmin = async (adminName, email, password, isLeadAdmin) => {
    console.log('add admin is being called')
    const admin = await fetch('http://localhost:3000/admins', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        name: adminName,
        email: email,
        password: password,
        is_lead_admin: isLeadAdmin
      })
    })
    console.log(admin)
    const adminParsed = await admin.json();
    console.log(adminParsed)
    this.getAdmins();
    this.toggleAddAdmin();

  }

  toggleDeleteModal = (id) => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
      selectedAdmin: id
    })
  }

  deleteAdmin = async (id) => {
    if (id !== "") {
      const deletedAdmin = await fetch('http://localhost:3000/admins/' + id, {
        method: "DELETE",
        credentials: 'include'
      })
      const admin = await deletedAdmin.json();
      this.loadAdminList();
      this.toggleDeleteModal();
    }
  }

  render() {
    return(
      <div className="admin-holder">
        {this.state.editingAdmin ? <EditAdmin adminName={this.state.adminName} email={this.state.email} isLeadAdmin={this.state.isLeadAdmin} editAdmin={this.editAdmin}/>
        : <div>{ this.state.addAdmin ? <AddAdmin addAdmin={this.addAdmin}/>
          : <div> { this.state.showDeleteModal ? <DeleteModal toggleDeleteModal={this.toggleDeleteModal} deleteAdmin={this.deleteAdmin} selectedAdmin={this.state.selectedAdmin}/>
            :<div>
              <AdminShow adminName={this.state.adminName} email={this.state.email} toggleEditAdmin={this.toggleEditAdmin} isLeadAdmin={this.state.isLeadAdmin}/>
              <AdminList admins={this.state.admins} toggleAddAdmin={this.toggleAddAdmin} toggleDeleteModal={this.toggleDeleteModal}/>
            </div>
          } </div>


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
