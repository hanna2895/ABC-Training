import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class DeleteModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    // this.setState({open: false});
    this.props.toggleDeleteModal()
  };

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
    // this.handleClose();
  }

  render() {
    const actions = [
      <RaisedButton
        className="button button-wide"
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <RaisedButton
        className="button button-wide"
        label="Delete"
        primary={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <Dialog title="Are you sure you want to delete?" actions={actions} modal={true} open={this.props.showDeleteModal}>

      </Dialog>
    )
  }
}

export default DeleteModal;

// <button onClick={this.props.toggleDeleteModal}> Cancel </button>
// <button onClick={this.handleSubmit}> Confirm Delete </button>
