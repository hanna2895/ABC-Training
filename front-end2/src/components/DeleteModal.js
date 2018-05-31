import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Container } from 'reactstrap';

class DeleteModal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.deleteClient(this.props.selectedClient)
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
