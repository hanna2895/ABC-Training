import React, { Component } from 'react';

class GroupList extends Component {
  constructor() {
    super();
    this.state = {
      selectedGroup: "",
      selectedGroupId: ""
    }
  }

  handleSelect = (e) => {
    // console.log(e.target, 'this is e.target')
    // const groupId = e.target.id;
    // console.log(groupId, 'groupId')
    // const group = e.target.innerHTML
    // console.log(group, 'group')
    // this.props.toggleGroupShow(group, groupId)
    console.log(e.target.innerHTML, ' was clicked')
    this.setState({
      selectedGroup: e.target.innerHTML,
      selectedGroupId: e.target.id
    })
  }

  handleViewClick = (e) => {
    e.preventDefault();
    console.log('edit group button clicked')
    this.props.toggleGroupShow(this.state.selectedGroup, this.state.selectedGroupId)
  }



  handleClick = (e) => {
    e.preventDefault();
    console.log('this is being clicked')
    if(this.props.selectedClient !== "") {
      this.props.toggleAddGroup();
    } else {
      // toggle a modal or something to say that you must first select a client to create a new group
      // alert("You must select a client first before creating a new group.")
    }
  }

  render() {
    const ListOfGroups = this.props.groups.map((group, i) => {
      return (
        <li key={group.id} id={group.id} onClick={this.handleSelect}> {group.name} </li>
      )
    })
    return (
      <div className="list-container">
        <h2> Groups </h2>
        <div className="list-holder">
          <ul>
            {ListOfGroups}
          </ul>
          <button onClick={this.handleViewClick}> View Group Details </button>
          <button onClick={this.handleClick}> Add a New Group </button>
        </div>
      </div>
    )
  }

}

export default GroupList;
