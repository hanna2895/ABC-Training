import React from 'react';

const GroupList = ({ groups, selectedClient, toggleAddGroup }) => {
  const ListOfGroups = groups.map((group, i) => {
    return (
      <li key={group.id}> {group.name} </li>
    )
  })

  const handleClick = (e) => {
    e.preventDefault();
    console.log('this is being clicked')
    if(selectedClient != "") {
      toggleAddGroup();
    } else {
      // toggle a modal or something to say that you must first select a client to create a new group
      // alert("You must select a client first before creating a new group.")
    }
  }

  return (
    <div className="list-container">
      <h2> Groups </h2>
      <div className="list-holder">
        <ul>
          {ListOfGroups}
        </ul>
        <button onClick={handleClick}> Add a New Group </button>
      </div>
    </div>
  )
}

export default GroupList;
