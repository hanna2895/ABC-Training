import React, { Component } from 'react';
import AdminList from './AdminList';
import AdminShow from './AdminShow';
import { connect } from 'react-redux';
import EditAdmin from './EditAdmin';
import AddAdmin from './AddAdmin';
import DeleteModal from './DeleteModal';
import * as adminActions from '../actions/adminActions';


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

  componentWillReceiveProps(nextProps) {
    if (this.state.email) {
      return
    } else {
      this.props.showLoggedAdmin(this.props.logged_in.user_id)
      this.setState({
        adminName: nextProps.name,
        email: nextProps.email,
        isLeadAdmin: nextProps.isLeadAdmin
      })
    }
  }

  showLoggedAdmin = () => {
    this.setState({
      adminName: this.props.name,
      email: this.props.email,
      isLeadAdmin: this.props.isLeadAdmin
    })
  }

  toggleEditAdmin = () => {
    this.setState({
      editingAdmin: !this.state.editingAdmin
    })
  }

  editAdminComponent = () => {
    this.toggleEditAdmin();
  }

  toggleAddAdmin = () => {
    this.setState({
      addAdmin: !this.state.addAdmin
    })
  }

  addAdmin = (adminName, email, password, isLeadAdmin) => {
    this.props.addAdmin(adminName, email, password, isLeadAdmin)
    this.toggleAddAdmin();
  }

  toggleDeleteModal = (id) => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
      selectedAdmin: id
    })
  }

  render() {
    return(
      <div className="admin-holder">
        {this.state.editingAdmin ? <EditAdmin adminName={this.state.adminName} email={this.state.email} isLeadAdmin={this.state.isLeadAdmin} editAdminComponent={this.editAdminComponent} toggleEditAdmin={this.toggleEditAdmin}/>
        : <div>{ this.state.addAdmin ? <AddAdmin addAdmin={this.addAdmin} toggleAddAdmin={this.toggleAddAdmin}/>
          : <div> { this.state.showDeleteModal ? <DeleteModal toggleDeleteModal={this.toggleDeleteModal} selectedAdmin={this.state.selectedAdmin} showDeleteModal={this.state.showDeleteModal}/>
            :<div>
              <AdminShow toggleEditAdmin={this.toggleEditAdmin} />
              <AdminList toggleAddAdmin={this.toggleAddAdmin} toggleDeleteModal={this.toggleDeleteModal}/>
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
    logged_in: state.logged_in,
    admins: state.admins,
    email: state.admins.admin_email,
    isLeadAdmin: state.admins.admin_isLeadAdmin,
    name: state.admins.admin_name,
    id: state.logged_in.user_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAdmins: () => dispatch(adminActions.getAdmins()),
    showLoggedAdmin: (id) => dispatch(adminActions.showLoggedAdmin(id)),
    editAdmin: (id, name, email, password) => dispatch(adminActions.editAdmin(id, name, email, password)),
    addAdmin: (name, email, password, isLeadAdmin) => dispatch(adminActions.addAdmin(name, email, password, isLeadAdmin)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHolder);
