import React, { Component } from 'react';

class DeleteModal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.deleteClient) {
      this.props.deleteClient(this.props.selectedClient)
    } else if (this.props.deleteGroup) {
      this.props.deleteGroup(this.props.selectedGroup)
    } else if (this.props.deleteStudent) {
      this.props.deleteStudent(this.props.studentId)
    } else if (this.props.deleteAdmin) {
      this.props.deleteAdmin(this.props.selectedAdmin)
    }

  }

  render() {
    return (
      <div className='Modal-Open'>
          <h2> Are you sure you want to delete {} ? </h2>
          <button onClick={this.props.toggleDeleteModal}> Cancel </button>
          <button onClick={this.handleSubmit}> Confirm Delete </button>
      </div>
    )
  }
}

export default DeleteModal;
